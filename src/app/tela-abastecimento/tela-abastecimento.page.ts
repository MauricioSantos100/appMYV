import { Component, OnInit } from '@angular/core';
import { Abastecimento } from 'src/entidades/Abastecimento';
import { ModalController } from '@ionic/angular';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-tela-abastecimento',
  templateUrl: './tela-abastecimento.page.html',
  styleUrls: ['./tela-abastecimento.page.scss'],
})
export class TelaAbastecimentoPage implements OnInit {

  editingAbastecimento: Abastecimento;
  newAbastecimento: Abastecimento;

  constructor(public modalContrl: ModalController, private dbService: DBService) { }

  ngOnInit() {
    if(this.editingAbastecimento) {
      this.newAbastecimento = this.editingAbastecimento;
    }
  }

  public back() {
    this.modalContrl.dismiss();
  }

  public save() {
    const updatingObject = {valor: this.newAbastecimento.valor};
    this.dbService.update('/Abastecimentos', updatingObject)
    .then(() => {
      this.modalContrl.dismiss(this.newAbastecimento);
    }).catch(error => {
      console.log(error);
    });
  }
}
