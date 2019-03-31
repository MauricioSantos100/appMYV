import { Component } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { NovoVeiculoPage } from './../novo-veiculo/novo-veiculo.page';
import { Router } from '@angular/router';
import { DBService } from './../services/db.service';
import { TelaVeiculoPage } from './../tela-veiculo/tela-veiculo.page';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.page.html',
  styleUrls: ['./garagem.page.scss'],
})
export class GaragemPage {

  veiculos: Veiculo[];
  loading: boolean;

  constructor(private dbService: DBService, public modalCtrl: ModalController, public toast: ToastController, public router: Router, public navCtrl: NavController) {
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
    })
  }

  async add() {
    const modal = await this.modalCtrl.create({
      component: NovoVeiculoPage
    });
    modal.onDidDismiss()
    .then(result =>{
      if(result.data) {
        this.confirmAdd();
      }
    });
    return await modal.present();
  }

  private confirmAdd() {
    this.presentToast('Veiculo na garagem.');
    this.loadVeiculos();
  }

  remove(uid: string) {
    this.dbService.remove('/Veiculos', uid)
    .then(() =>{
      this.presentToast('Veiculo removido com sucesso');
      this.loadVeiculos();
    });
  }

  async edit(veiculo: Veiculo) {
    const toast = await this.modalCtrl.create({
      component: TelaVeiculoPage,
      componentProps: {
        editingVeiculo: Veiculo
      }
    })
  }

  async presentToast(mensage: string) {
    const toast = await this.toast.create({
      message: mensage,
      duration: 1000
    });
    toast.present();
  }
}
