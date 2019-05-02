import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Abastecimento } from 'src/entidades/Abastecimento';
import { NovoAbastecimentoPage } from '../novo-abastecimento/novo-abastecimento.page';
import { DBService } from './../services/db.service';
import { TelaAbastecimentoPage } from '../tela-abastecimento/tela-abastecimento.page';
import { Veiculo } from 'src/entidades/Veiculo';

@Component({
  selector: 'app-abastecimento',
  templateUrl: './abastecimento.page.html',
  styleUrls: ['./abastecimento.page.scss'],
})
export class AbastecimentoPage {

  veiculoList: Veiculo[];
  abastecimentos: Abastecimento[];
  loading: boolean;

  constructor(private dbService: DBService, public modalCntrl: ModalController, public toastCntrl: ToastController) {
    this.init();
  }

  private async init() {
    this.loading = true;
    await this.loadVeiculos();
    await this.loadAbastecimentos();
  }

  private async loadVeiculos() {
    this.veiculoList = await this.dbService.listWithUIDs<Veiculo>('/Veiculos');
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
    });

    modal.onDidDismiss()
      .then(result => {
        if(result.data) {
          this.confirmAdd();
        }
      });
    return await modal.present();
  }

  private confirmAdd() {
    this.presentToast("Abastecimento salvo.");
    this.loadAbastecimentos();
  }

  async view(abastecimento: Abastecimento) {
    const modal = await this.modalCntrl.create({
      component: TelaAbastecimentoPage,
      componentProps: {
        viewAbastecimento: abastecimento
      }
    });
    modal.onDidDismiss()
    .then(() => {
      this.loadAbastecimentos();
    });
    return await modal.present();
  }
  
  async presentToast(mensagem: string) {
    const toast = await this.toastCntrl.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
}