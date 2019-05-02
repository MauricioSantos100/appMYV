import { Component, OnInit } from '@angular/core';
import { Abastecimento } from 'src/entidades/Abastecimento';
import { ModalController, ToastController } from '@ionic/angular';
import { DBService } from '../services/db.service';
import { EditarAbastecimentoPage } from './../editar-abastecimento/editar-abastecimento.page';

@Component({
  selector: 'app-tela-abastecimento',
  templateUrl: './tela-abastecimento.page.html',
  styleUrls: ['./tela-abastecimento.page.scss'],
})
export class TelaAbastecimentoPage implements OnInit {

  viewAbastecimento: Abastecimento;

  constructor(public modalCntrl: ModalController, private dbService: DBService, private toastCntrl: ToastController) { }

  ngOnInit() {
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  remove(uid: string) {
    this.dbService.remove('/Abastecimentos', uid)
    .then(() => {
      this.presentToast("Abastecimento excluida");
      this.modalCntrl.dismiss();
    }).catch(error => {
      this.presentToast("Erro ao remover");
    })
  }

  async edit(abastecimento: Abastecimento) {
    const modal = await this.modalCntrl.create({
      component: EditarAbastecimentoPage,
      componentProps: {
        editingAbastecimento: abastecimento
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.presentToast("Abastecimento alterado.");
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
