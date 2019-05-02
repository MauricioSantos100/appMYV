import { Component, OnInit } from '@angular/core';
import { Manutencao } from 'src/entidades/Manutencao';
import { ModalController } from '@ionic/angular';
import { DBService } from './../services/db.service';

@Component({
  selector: 'app-editar-manutencao',
  templateUrl: './editar-manutencao.page.html',
  styleUrls: ['./editar-manutencao.page.scss'],
})
export class EditarManutencaoPage implements OnInit {

  editingManutencao: Manutencao;
  newManutencao: Manutencao;

  constructor(public modalCntrl: ModalController, private dbService: DBService) { }

  ngOnInit() {
    if(this.editingManutencao) {
      this.newManutencao = this.editingManutencao;
    }
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  public save() {
    const updatingObject = {tipo: this.newManutencao.tipo, dataManutencao: this.newManutencao.dataManutencao, dataValidade: this.newManutencao.dataValidade, 
      valor: this.newManutencao.valor, tipoPagamento: this.newManutencao.tipoPagamento, local: this.newManutencao.local, observacao: this.newManutencao.observacao};
    this.dbService.update('/Manutencoes', this.newManutencao.uid, updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newManutencao);
    }).catch(error => {
      console.log(error);
    });
  }
}