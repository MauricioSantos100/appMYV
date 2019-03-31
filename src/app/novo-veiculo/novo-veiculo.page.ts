import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Veiculo } from './../../entidades/Veiculo';
import { DBService } from './../services/db.service';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.page.html',
  styleUrls: ['./novo-veiculo.page.scss'],
})
export class NovoVeiculoPage {

  newVeiculo: Veiculo;

  constructor(public modalContrl: ModalController, private dbService: DBService) {
    this.newVeiculo = new Veiculo;
   }

  public back() {
    this.modalContrl.dismiss();
  }

  public save() {
    this.dbService.insertInList<Veiculo>('/Veiculos', this.newVeiculo)
    .then(() => {
      this.modalContrl.dismiss(this.newVeiculo);
    }).catch(error => {
      console.log(error);
    })
  }
}
