import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Manutencao } from './../../entidades/Manutencao';

@Component({
  selector: 'app-nova-manutencao',
  templateUrl: './nova-manutencao.page.html',
  styleUrls: ['./nova-manutencao.page.scss'],
})
export class NovaManutencaoPage {

  novaManutencao: Manutencao;

  constructor(public modal: ModalController) {
    this.novaManutencao = new Manutencao;
   }

  save() {
    this.modal.dismiss(this.novaManutencao);
  }

  back() {
    this.modal.dismiss();
  }
}
