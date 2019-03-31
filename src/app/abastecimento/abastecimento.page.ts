import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Abastecimento } from 'src/entidades/Abastecimento';
import { NovoAbastecimentoPage } from '../novo-abastecimento/novo-abastecimento.page';
import { DBService } from './../services/db.service';
import { TelaAbastecimentoPage } from '../tela-abastecimento/tela-abastecimento.page';

@Component({
  selector: 'app-abastecimento',
  templateUrl: './abastecimento.page.html',
  styleUrls: ['./abastecimento.page.scss'],
})
export class AbastecimentoPage {

  abastecimentos: Abastecimento[];
  loading: boolean;

  constructor(private dbService: DBService, public modalCntrl: ModalController, public toast: ToastController) {
    this.init();
  }

  private async init() {
    this.loading = true;
    this.loadAbastecimentos();
  }

  private async loadAbastecimentos() {
    this.dbService.listWithUIDs<Abastecimento>('/Abastecimentos')
    .then(Abastecimentos => {
      this.abastecimentos = Abastecimentos;
      this.loading = false;
    }).catch(error => {
      console.log(error);
    })
  }

  async add() {
    const modal = await this.modalCntrl.create({
      component: NovoAbastecimentoPage
    })
    modal.onDidDismiss()
      .then(result => {
        if(result.data) {
          this.confirmAdd();
        }
      })
    return await modal.present();
  }

  private confirmAdd() {
    this.presentToast("Abastecimento salvo.")
    this.loadAbastecimentos();
  }

  remove(uid: string) {
    this.dbService.remove('/Abastecimentos', uid)
    .then(() => {
      this.confirmRemove();
    }).catch(error => {
      this.presentToast("Erro ao remover.");
    })
  }

  private confirmRemove() {
    this.presentToast("Abastecimento removido.");
    this.loadAbastecimentos();
  }

  async edit(abastecimento: Abastecimento) {
    const modal = await this.modalCntrl.create({
      component: TelaAbastecimentoPage,
      componentProps: {
        editingAbastecimento: Abastecimento
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if(result.data) {
          this.confirmAdd();
        }
      });

    return await modal.present();
  }
  
  async presentToast(mensagem: string) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: 2000
    })
  }
}