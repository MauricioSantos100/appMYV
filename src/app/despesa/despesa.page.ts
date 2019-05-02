import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Despesa } from 'src/entidades/Despesa';
import { NovaDespesaPage } from '../nova-despesa/nova-despesa.page';
import { DBService } from './../services/db.service';
import { TelaDespesaPage } from '../tela-despesa/tela-despesa.page';
import { Veiculo } from 'src/entidades/Veiculo';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.page.html',
  styleUrls: ['./despesa.page.scss'],
})
export class DespesaPage {

  veiculoList: Veiculo[];
  despesas: Despesa[];
  loading: boolean;

  constructor(private dbService: DBService, public modalCntrl: ModalController, public toastCntrl: ToastController) {
    this.init();
  }

  private async init() {
    this.loading = true;
    await this.loadVeiculos();
    await this.loadDespesas();
  }

  
  private async loadVeiculos() {
    this.veiculoList = await this.dbService.listWithUIDs<Veiculo>('/Veiculos');
  }

  private async loadDespesas() {
    this.dbService.listWithUIDs<Despesa>('/Despesas')
      .then(Despesas => {
        this.despesas = Despesas;
        this.loading = false;
      }).catch(error => {
        console.log(error);
      })
  }

  async add() {
    const modal = await this.modalCntrl.create({
      component: NovaDespesaPage
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
    this.presentToast("Despesa Salva.");
    this.loadDespesas();
  }

  async view(despesa: Despesa) {
    const modal = await this.modalCntrl.create({
      component: TelaDespesaPage,
      componentProps: {
        viewDespesa: despesa
      }
    });
    modal.onDidDismiss()
    .then(() => {
      this.loadDespesas();
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
