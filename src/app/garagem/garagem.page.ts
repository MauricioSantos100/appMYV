import { Component } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { NovoVeiculoPage } from './../novo-veiculo/novo-veiculo.page';
import { DBService } from './../services/db.service';
import { Router } from '@angular/router';
import { TelaVeiculoPage } from '../tela-veiculo/tela-veiculo.page';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.page.html',
  styleUrls: ['./garagem.page.scss'],
})
export class GaragemPage {

  veiculos: Veiculo[];
  loading: boolean;
  email: string;

  constructor(public modalCntrl: ModalController, private dbService: DBService, public toastCntrl: ToastController, public router: Router, private nav: NavController, private fAuth: AngularFireAuth) {
    this.init();
  }

  private async init() {
    this.loading = true;
    this.email = this.fAuth.auth.currentUser.email;
    await this.loadVeiculos();
    this.loading = false;
  }

  private async loadVeiculos() {
    this.veiculos = await this.dbService.search<Veiculo>('/Veiculos', 'usuarioEmail', this.email);
    // this.dbService.listWithUIDs<Veiculo>('/Veiculos')
    // .then(Veiculos => {
    //   this.veiculos = Veiculos;
    //   this.loading = false;
    // }).catch(error => {
    //   console.log(error);
    // });
  }

  search(event) {
    const searchTerm = event.srcElement.value;
    if (searchTerm) {
      this.veiculos = this.veiculos.filter(Veiculo => {
        if (Veiculo.marca && searchTerm) {
          if (Veiculo.marca.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    } else {
      this.loadVeiculos();
    }
  }

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.2
  }

  async add() {
    const modal = await this.modalCntrl.create({
      component: NovoVeiculoPage
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmAdd();
        }
      });
    return await modal.present();
  }

  private confirmAdd() {
    this.presentToast('Veiculo na garagem');
    this.loadVeiculos();
  }

  async view(veiculo: Veiculo) {
    const modal = await this.modalCntrl.create({
      component: TelaVeiculoPage,
      componentProps: {
        viewVeiculo: veiculo
      }
    });
    modal.onDidDismiss()
      .then(() => {
        this.init();
      });
    return await modal.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCntrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}