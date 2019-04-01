import { Component } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { NovoVeiculoPage } from './../novo-veiculo/novo-veiculo.page';
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

  constructor(public modalController: ModalController, private dbService: DBService, public toastController: ToastController) {
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
    const modal = await this.modalController.create({
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

  async edit(veiculo: Veiculo) {
    const modal = await this.modalController.create({
      component: TelaVeiculoPage,
      componentProps: {
        editingVeiculo: Veiculo
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmAdd();
        }
      });

    return  await modal.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}