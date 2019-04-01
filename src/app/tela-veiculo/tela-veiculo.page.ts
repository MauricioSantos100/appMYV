import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/entidades/Veiculo';
import { ModalController } from '@ionic/angular';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-tela-veiculo',
  templateUrl: './tela-veiculo.page.html',
  styleUrls: ['./tela-veiculo.page.scss'],
})
export class TelaVeiculoPage implements OnInit{

  editingVeiculo: Veiculo;
  newVeiculo: Veiculo;

  constructor(public modalCntrl: ModalController, private dbService: DBService) { }

  ngOnInit() {
    if(this.editingVeiculo) {
      this.newVeiculo = this.editingVeiculo;
    }
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  public save() {
    const updatingObject = {nome: this.newVeiculo.nome};
    this.dbService.update('/Veiculos', updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newVeiculo);
    }).catch(error => {
      console.log(error);
    });
  }
}
