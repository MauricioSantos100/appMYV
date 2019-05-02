import { Component, OnInit } from '@angular/core';
import { Manutencao } from 'src/entidades/Manutencao';
import { ModalController, ToastController } from '@ionic/angular';
import { DBService } from '../services/db.service';
import { EditarManutencaoPage } from './../editar-manutencao/editar-manutencao.page';

@Component({
  selector: 'app-tela-manutencao',
  templateUrl: './tela-manutencao.page.html',
  styleUrls: ['./tela-manutencao.page.scss'],
})
export class TelaManutencaoPage implements OnInit{

  viewManutencao: Manutencao;

  constructor(public modalCntrl: ModalController, private dbService: DBService, private toastCntrl: ToastController) { }

  ngOnInit() {
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  remove(uid: string) {
    this.dbService.remove('/Manutencoes', uid)
    .then(() => {
      this.presentToast("Manutenção excluida");
      this.modalCntrl.dismiss();
    }).catch(error => {
      this.presentToast("Erro ao remover");
    })
  }

  async edit(manutencao: Manutencao) {
    const modal = await this.modalCntrl.create({
      component: EditarManutencaoPage,
      componentProps: {
        editingManutencao: manutencao
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.presentToast("Manutenção alterada.");
        }
      });
    return  await modal.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCntrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}