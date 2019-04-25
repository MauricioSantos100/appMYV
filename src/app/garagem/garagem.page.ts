import { Component } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { NovoVeiculoPage } from './../novo-veiculo/novo-veiculo.page';
import { DBService } from './../services/db.service';
import { Router } from '@angular/router';
import { TelaVeiculoPage } from '../tela-veiculo/tela-veiculo.page';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.page.html',
  styleUrls: ['./garagem.page.scss'],
})
export class GaragemPage {

  veiculos: Veiculo[];
  loading: boolean;

  constructor(public modalCntrl: ModalController, private dbService: DBService, public toastCntrl: ToastController, public router: Router, private nav: NavController) {
    this.init();
  }

  private async init() {
    this.loading = true;
    await this.loadVeiculos();
  }

  private async loadVeiculos() {
    this.dbService.listWithUIDs<Veiculo>('/Veiculos')
      .then(Veiculos => {
        this.veiculos = Veiculos;
        this.loading = false;
      }).catch(error => {
        console.log(error);
      });
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
    return  await modal.present();
  }

  private confirmAdd() {
    this.presentToast('Veiculo na garagem');
    this.loadVeiculos();
  }

  remove(uid: string) {
    this.dbService.remove('/Veiculos', uid)
    .then(() => {
      this.confirmRemove();
    }).catch(error => {
      this.presentToast("Erro ao remover.");
    })
  }

  private confirmRemove() {
    this.presentToast("Veiculo removido.");
    this.loadVeiculos();
  }

  async view(veiculo: Veiculo) {
    const modal = await this.modalCntrl.create({
      component: TelaVeiculoPage,
      componentProps: {
        viewVeiculo: veiculo
      }
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