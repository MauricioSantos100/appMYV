import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/entidades/Despesa';
import { ModalController } from '@ionic/angular';
import { DBService } from './../services/db.service';

@Component({
  selector: 'app-editar-despesa',
  templateUrl: './editar-despesa.page.html',
  styleUrls: ['./editar-despesa.page.scss'],
})
export class EditarDespesaPage implements OnInit {

  editingDespesa: Despesa;
  newDespesa: Despesa;

  constructor(public modalCntrl: ModalController, private dbService: DBService) {
    
   }

  ngOnInit() {
    if(this.editingDespesa) {
      this.newDespesa = this.editingDespesa;
    }
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  public save() {
    const updatingObject = {tipo: this.newDespesa.tipo, dataDespesa: this.newDespesa.dataDespesa, valor: this.newDespesa.valor, 
      tipoPagamento: this.newDespesa.tipoPagamento, local: this.newDespesa.local, observacao: this.newDespesa.observacao};
    this.dbService.update('/Despesas', this.newDespesa.uid, updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newDespesa);
    }).catch(error => {
      console.log(error);
    });
  }

  despesas: any[] = [
    {nome:"Pedágio"},
    {nome:"Estacionamento"},
    {nome:"Lavagem"},
    {nome:"Diversos"}
  ]
}
