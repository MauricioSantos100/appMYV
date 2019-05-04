import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Manutencao } from 'src/entidades/Manutencao';
import { NovaManutencaoPage } from './../nova-manutencao/nova-manutencao.page';
import { DBService } from '../services/db.service';
import { TelaManutencaoPage } from '../tela-manutencao/tela-manutencao.page';
import { Veiculo } from './../../entidades/Veiculo';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.page.html',
  styleUrls: ['./manutencao.page.scss'],
})
export class ManutencaoPage {

  veiculoList: Veiculo[];
  manutencoes: Manutencao[];
  loading: boolean;
  email: string;

  constructor(public modalCntrl: ModalController, private dbService: DBService, public toastCntrl: ToastController, private fAuth: AngularFireAuth) {
    this.init();
  }

  private async init() {
    this.loading = true;
    this.email = this.fAuth.auth.currentUser.email;
    await this.loadVeiculos();
    await this.loadManutencoes();
  }

  private async loadVeiculos() {
    this.veiculoList = await this.dbService.search<Veiculo>('/Veiculos', 'usuarioEmail', this.email);
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

  search(event) {
    const searchTerm = event.srcElement.value;
    if (searchTerm) {
      this.manutencoes = this.manutencoes.filter(Manutencao => {
        if (Manutencao.local && searchTerm) {
          if (Manutencao.local.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    } else {
      this.loadManutencoes();
    }
  }

  async add() {
    const modal = await this.modalCntrl.create({
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

  async view(manutencao: Manutencao) {
    const modal = await this.modalCntrl.create({
      component: TelaManutencaoPage,
      componentProps: {
        viewManutencao: manutencao
      }
    });
    modal.onDidDismiss()
    .then(() => {
      this.loadManutencoes();
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