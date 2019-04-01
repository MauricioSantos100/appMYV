import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Veiculo } from './../../entidades/Veiculo';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.page.html',
  styleUrls: ['./novo-veiculo.page.scss'],
})
export class NovoVeiculoPage {

  novoVeiculo: Veiculo;

  constructor(public modalContrl: ModalController) {
    this.novoVeiculo = new Veiculo;
   }

  public back() {
    this.modalContrl.dismiss();
  }

  public save() {
    this.modalContrl.dismiss(this.novoVeiculo);
  }
}
