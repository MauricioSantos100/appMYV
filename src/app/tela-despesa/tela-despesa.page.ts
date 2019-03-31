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

  constructor(public modalContrl: ModalController, private dbService: DBService) { }

  ngOnInit() {
    if(this.editingDespesa) {
      this.newDespesa = this.editingDespesa;
    }
  }

  public back() {
    this.modalContrl.dismiss();
  }

  public save() {
    const updatingObject = {tipo: this.newDespesa.tipo};
    this.dbService.update('/Despesas', updatingObject)
    .then(() => {
      this.modalContrl.dismiss(this.newDespesa);
    }).catch(error => {
      console.log(error);
    });
  }
}
