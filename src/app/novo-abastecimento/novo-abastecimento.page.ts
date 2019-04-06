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

  constructor(public modalContrl: ModalController, private dbService: DBService) {
    this.newAbastecimento = new Abastecimento;
    this.loadVeiculos();
   }

   private async loadVeiculos() {
    this.veiculoList = await this.dbService.listWithUIDs<Veiculo>('/Veiculos');
  }

  public back() {
    this.modalContrl.dismiss();
  }

  public save() {
    this.dbService.insertInList<Abastecimento>('/Abastecimentos', this.newAbastecimento)
    .then(() => {
      this.modalContrl.dismiss(this.newAbastecimento)
    }).catch(error => {
      console.log(error);
    })
  }

  customAlertVeiculo: any = {
    header: 'Veiculos',
    mode: 'ios'
  }
}
