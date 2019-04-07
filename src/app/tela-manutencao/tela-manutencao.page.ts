import { Component, OnInit } from '@angular/core';
import { Manutencao } from 'src/entidades/Manutencao';
import { ModalController } from '@ionic/angular';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-tela-manutencao',
  templateUrl: './tela-manutencao.page.html',
  styleUrls: ['./tela-manutencao.page.scss'],
})
export class TelaManutencaoPage implements OnInit{

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
    const updatingObject = {tipo: this.newManutencao.tipo, dataValidade: this.newManutencao.datavalidade, valor: this.newManutencao.valor, tipoPagamento: this.newManutencao.tipoPagamento, local: this.newManutencao.local, observacao: this.newManutencao.observacao};
    this.dbService.update('/Manutencoes', this.newManutencao.uid, updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newManutencao);
    }).catch(error => {
      console.log(error);
    });
  }
}