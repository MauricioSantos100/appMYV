import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/entidades/Veiculo';
import { ModalController } from '@ionic/angular';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.page.html',
  styleUrls: ['./editar-veiculo.page.scss'],
})
export class EditarVeiculoPage implements OnInit {

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
    const updatingObject = {marca: this.newVeiculo.marca, modelo: this.newVeiculo.modelo, placa: this.newVeiculo.placa, anoModelo: this.newVeiculo.anoModelo, 
      anoFabricacao: this.newVeiculo.anoFabricacao, cor: this.newVeiculo.cor, metragem: this.newVeiculo.metragem, combustivel: this.newVeiculo.combustivel, 
      tanque: this.newVeiculo.tanque, chassi: this.newVeiculo.chassi, renavam: this.newVeiculo.renavam, observacao: this.newVeiculo.observacao};
    this.dbService.update('/Veiculos', this.newVeiculo.uid, updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newVeiculo);
    }).catch(error => {
      console.log(error);
    });
  }
}