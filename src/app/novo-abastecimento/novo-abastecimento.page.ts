import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Abastecimento } from 'src/entidades/abastecimento';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-novo-abastecimento',
  templateUrl: './novo-abastecimento.page.html',
  styleUrls: ['./novo-abastecimento.page.scss'],
})
export class NovoAbastecimentoPage {

  newAbastecimento: Abastecimento;

  constructor(public modalContrl: ModalController, private dbService: DBService) {
    this.newAbastecimento = new Abastecimento;
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
}
