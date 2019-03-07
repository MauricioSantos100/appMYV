import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Despesa } from 'src/entidades/Despesa';

@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.page.html',
  styleUrls: ['./nova-despesa.page.scss'],
})
export class NovaDespesaPage {

  novaDespesa: Despesa;
  
  constructor(public modalCntrl: ModalController) {
    this.novaDespesa = new Despesa;
   }

  save() {
    this.modalCntrl.dismiss(this.novaDespesa);
  }

  back() {
    this.modalCntrl.dismiss();
  }
}
