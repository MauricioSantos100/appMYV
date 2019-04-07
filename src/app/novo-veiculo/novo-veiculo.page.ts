import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.page.html',
  styleUrls: ['./novo-veiculo.page.scss'],
})
export class NovoVeiculoPage {

  newVeiculo: Veiculo;
  
  constructor(public modalCntrl: ModalController, private dbService: DBService) {
    this.newVeiculo = new Veiculo;
   }

  public back() {
    this.modalCntrl.dismiss();
  }
  
  public save() {
    this.dbService.insertInList<Veiculo>('/Veiculos', this.newVeiculo)
    .then(() => {
      this.modalCntrl.dismiss(this.newVeiculo)
    }).catch(error => {
      console.log(error);
    })
  }
}
