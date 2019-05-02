import { Component, OnInit } from '@angular/core';
import { Abastecimento } from 'src/entidades/Abastecimento';
import { ModalController } from '@ionic/angular';
import { DBService } from './../services/db.service';

@Component({
  selector: 'app-editar-abastecimento',
  templateUrl: './editar-abastecimento.page.html',
  styleUrls: ['./editar-abastecimento.page.scss'],
})
export class EditarAbastecimentoPage implements OnInit {

  editingAbastecimento: Abastecimento;
  newAbastecimento: Abastecimento;

  constructor(public modalCntrl: ModalController, private dbService: DBService) {
    
   }

  ngOnInit() {
    if(this.editingAbastecimento) {
      this.newAbastecimento = this.editingAbastecimento;
    }
  }

  public back() {
    this.modalCntrl.dismiss();
  }
  
  public save() {
    const updatingObject = {dataAbastecimento: this.newAbastecimento.dataAbastecimento, valor: this.newAbastecimento.valor, tipoPagamento: this.newAbastecimento.tipoPagamento, 
      local: this.newAbastecimento.local, observacao: this.newAbastecimento.observacao};
    this.dbService.update('/Abastecimentos', this.newAbastecimento.uid, updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newAbastecimento);
    }).catch(error => {
      console.log(error);
    });
  }
}
