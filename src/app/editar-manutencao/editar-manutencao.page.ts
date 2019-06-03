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

  manutencoes: any[] = [
    {nome:"Ar Condicionado"},
    {nome:"Bateria"},
    {nome:"Bomba de Combustível"},
    {nome:"Buzina"},
    {nome:"Correia Dentada"},
    {nome:"Carroceria/Chasis"},
    {nome:"Cinto"},
    {nome:"Direção"},
    {nome:"Embreagem"},
    {nome:"Escapamento"},
    {nome:"Extintor"},
    {nome:"Farol/Lanterna"},
    {nome:"Filtro de Ar"},
    {nome:"Filtro de Combustível"},
    {nome:"Filtro de Óleo"},
    {nome:"Fluido de Embreagem"},
    {nome:"Fluido de Transmissão"},
    {nome:"Fluido de Freio"},
    {nome:"Injeção/Carburador"},
    {nome:"Limpadores de Para-brisa"},
    {nome:"Pastilhas de Freio"},
    {nome:"Pneus - Alinhamento/Balanceamento"},
    {nome:"Pneus - Calibragem"},
    {nome:"Pneus - Rodízio"},
    {nome:"Radiador"},
    {nome:"Reparo no motor"},
    {nome:"Revisão"},
    {nome:"Suspensão"},
    {nome:"Transmissão"},
    {nome:"Troca de Freios"},
    {nome:"Troca de Peças"},
    {nome:"Troca de Óleo"},
    {nome:"Velas e Ignição"},
    {nome:"Vidros/Espelhos"}
  ]
}