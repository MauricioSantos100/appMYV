import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/entidades/Despesa';
import { ModalController } from '@ionic/angular';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-tela-despesa',
  templateUrl: './tela-despesa.page.html',
  styleUrls: ['./tela-despesa.page.scss'],
})
export class TelaDespesaPage implements OnInit{

  editingDespesa: Despesa;
  newDespesa: Despesa;

  constructor(public modalCntrl: ModalController, private dbService: DBService) { }

  ngOnInit() {
    if(this.editingDespesa) {
      this.newDespesa = this.editingDespesa;
    }
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  public save() {
    const updatingObject = {tipo: this.newDespesa.tipo, valor: this.newDespesa.valor, tipoPagamento: this.newDespesa.tipoPagamento, local: this.newDespesa.local, observacao: this.newDespesa.observacao};
    this.dbService.update('/Despesas', this.newDespesa.uid, updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newDespesa);
    }).catch(error => {
      console.log(error);
    });
  }
}
