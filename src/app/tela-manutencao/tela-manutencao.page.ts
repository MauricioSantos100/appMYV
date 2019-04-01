import { Component, OnInit } from '@angular/core';
import { Manutencao } from 'src/entidades/Manutencao';
import { ModalController } from '@ionic/angular';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-tela-manutencao',
  templateUrl: './tela-manutencao.page.html',
  styleUrls: ['./tela-manutencao.page.scss'],
})
export class TelaManutencaoPage {

  editingManutencao: Manutencao;
  newManutencao: Manutencao;

  constructor(public modalContrl: ModalController, private dbService: DBService) { }

  ngOnInit() {
    if(this.editingManutencao) {
      this.newManutencao = this.editingManutencao;
    }
  }

  public back() {
    this.modalContrl.dismiss();
  }

  public save() {
    const updatingObject = {tipo: this.editingManutencao.tipo};
    this.dbService.update('/Manutencoes', updatingObject)
    .then(() => {
      this.modalContrl.dismiss(this.newManutencao);
    }).catch(error => {
      console.log(error);
    });
  }
}