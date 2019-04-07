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

  constructor(public modalCntrl: ModalController, private dbService: DBService) { }

  ngOnInit() {
    if(this.editingAbastecimento) {
      this.newAbastecimento = this.editingAbastecimento;
    }
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  public save() {
    const updatingObject = {valor: this.newAbastecimento.valor, tipoPagamento: this.newAbastecimento.tipoPagamento, local: this.newAbastecimento.local, observacao: this.newAbastecimento.observacao};
    this.dbService.update('/Abastecimentos', this.newAbastecimento.uid, updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newAbastecimento);
    }).catch(error => {
      console.log(error);
    });
  }
}
