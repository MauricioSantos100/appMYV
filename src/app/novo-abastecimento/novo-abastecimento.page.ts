import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Abastecimento } from 'src/entidades/abastecimento';

@Component({
  selector: 'app-novo-abastecimento',
  templateUrl: './novo-abastecimento.page.html',
  styleUrls: ['./novo-abastecimento.page.scss'],
})
export class NovoAbastecimentoPage {

  novoAbastecimento: Abastecimento;

  constructor(public modalCntrl: ModalController) {
    this.novoAbastecimento = new Abastecimento;
   }

  save(){
    this.modalCntrl.dismiss(this.novoAbastecimento);
  }

  back(){
    this.modalCntrl.dismiss();
  }
}
