import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Manutencao } from 'src/entidades/Manutencao';
import { NovaManutencaoPage } from './../nova-manutencao/nova-manutencao.page';
import { DBService } from '../services/db.service';
import { TelaManutencaoPage } from '../tela-manutencao/tela-manutencao.page';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.page.html',
  styleUrls: ['./manutencao.page.scss'],
})
export class ManutencaoPage {

  manutencoes: Manutencao[];
  loading: boolean;

  constructor(public modalController: ModalController, private dbService: DBService, public toastController: ToastController) {
    this.init();
  }

  private async init() {
    this.loading = true;
    await this.loadManutencoes();
  }

  private async loadManutencoes() {
    this.dbService.listWithUIDs<Manutencao>('/Manutencoes')
      .then(Manutencoes => {
        this.manutencoes = Manutencoes;
        this.loading = false;
      }).catch(error => {
        console.log(error);
      });
  }

  async add() {
    const modal = await this.modalController.create({
      component: NovaManutencaoPage
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
    this.presentToast('Manutenção salva');
    this.loadManutencoes();
  }

  remove(uid: string) {
    this.dbService.remove('/Manutencoes', uid)
    .then(() => {
      this.confirmRemove();
    }).catch(error => {
      this.presentToast("Erro ao remover");
    })
  }

  private confirmRemove() {
    this.presentToast("Manutenção removida");
    this.loadManutencoes();
  }

  async edit(manutencao: Manutencao) {
    const modal = await this.modalController.create({
      component: TelaManutencaoPage,
      componentProps: {
        editingManutencao: Manutencao
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