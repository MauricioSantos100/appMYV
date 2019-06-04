import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Manutencao } from './../../entidades/Manutencao';
import { DBService } from '../services/db.service';
import { Veiculo } from './../../entidades/Veiculo';

@Component({
  selector: 'app-nova-manutencao',
  templateUrl: './nova-manutencao.page.html',
  styleUrls: ['./nova-manutencao.page.scss'],
})
export class NovaManutencaoPage {

  veiculoList: Veiculo[];
  newManutencao: Manutencao;
  data: string;
  
  constructor(public modalCntrl: ModalController, private dbService: DBService) {
    this.newManutencao = new Manutencao;
    this.data = new Date().toISOString();
    this.loadVeiculos();
   }

   private async loadVeiculos() {
    this.veiculoList = await this.dbService.listWithUIDs<Veiculo>('/Veiculos');
  }

  public back() {
    this.modalCntrl.dismiss();
  }
  
  public save() {
    this.newManutencao.dataManutencao = new Date(this.data).getTime();
    this.newManutencao.veiculoUID = sessionStorage.getItem('modeloUID');
    this.dbService.insertInList<Manutencao>('/Manutencoes', this.newManutencao)
    .then(() => {
      this.modalCntrl.dismiss(this.newManutencao)
    }).catch(error => {
      console.log(error);
    })
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