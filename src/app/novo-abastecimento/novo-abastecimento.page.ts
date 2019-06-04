import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Abastecimento } from 'src/entidades/Abastecimento';
import { DBService } from '../services/db.service';
import { Veiculo } from 'src/entidades/Veiculo';

@Component({
  selector: 'app-novo-abastecimento',
  templateUrl: './novo-abastecimento.page.html',
  styleUrls: ['./novo-abastecimento.page.scss'],
})
export class NovoAbastecimentoPage {

  veiculoList: Veiculo[];
  newAbastecimento: Abastecimento;
  data: string;

  constructor(public modalCntrl: ModalController, private dbService: DBService) {
    this.newAbastecimento = new Abastecimento;
    this.loadVeiculos();
    this.data = new Date().toISOString();
   }

   private async loadVeiculos() {
    this.veiculoList = await this.dbService.listWithUIDs<Veiculo>('/Veiculos');
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  public save() {
    this.newAbastecimento.dataAbastecimento = new Date(this.data).getTime();
    this.newAbastecimento.veiculoUID = sessionStorage.getItem('modeloUID');
    this.dbService.insertInList<Abastecimento>('/Abastecimentos', this.newAbastecimento)
    .then(() => {
      this.modalCntrl.dismiss(this.newAbastecimento)
    }).catch(error => {
      console.log(error);
    })
  }
}
