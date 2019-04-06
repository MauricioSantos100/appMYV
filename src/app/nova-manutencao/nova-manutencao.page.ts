import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Manutencao } from './../../entidades/Manutencao';
import { DBService } from '../services/db.service';
import { Veiculo } from './../../entidades/Veiculo';

@Component({
  selector: 'app-nova-manutencao',
  templateUrl: './nova-manutencao.page.html',
  styleUrls: ['./nova-manutencao.page.scss'],
})
export class NovaManutencaoPage {

  veiculoList: Veiculo[];
  newManutencao: Manutencao;
  
  constructor(public modalContrl: ModalController, private dbService: DBService) {
    this.newManutencao = new Manutencao;
    this.loadVeiculos();
   }

   private async loadVeiculos() {
    this.veiculoList = await this.dbService.listWithUIDs<Veiculo>('/Veiculos');
  }

  public back() {
    this.modalContrl.dismiss();
  }
  
  public save() {
    this.dbService.insertInList<Manutencao>('/Manutencoes', this.newManutencao)
    .then(() => {
      this.modalContrl.dismiss(this.newManutencao)
    }).catch(error => {
      console.log(error);
    })
  }
}