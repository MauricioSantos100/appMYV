import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/entidades/Despesa';
import { ModalController, ToastController } from '@ionic/angular';
import { DBService } from '../services/db.service';
import { EditarDespesaPage } from './../editar-despesa/editar-despesa.page';

@Component({
  selector: 'app-tela-despesa',
  templateUrl: './tela-despesa.page.html',
  styleUrls: ['./tela-despesa.page.scss'],
})
export class TelaDespesaPage implements OnInit{

  viewDespesa: Despesa;

  constructor(public modalCntrl: ModalController, private dbService: DBService, private toastCntrl: ToastController) { }

  ngOnInit() {
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  remove(uid: string) {
    this.dbService.remove('/Despesas', uid)
    .then(() => {
      this.presentToast("Despesa excluida");
      this.modalCntrl.dismiss();
    }).catch(error => {
      this.presentToast("Erro ao remover");
    })
  }

  async edit(despesa: Despesa) {
    const modal = await this.modalCntrl.create({
      component: EditarDespesaPage,
      componentProps: {
        editingDespesa: despesa
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.presentToast("Despesa alterada.");
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
