import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Despesa } from 'src/entidades/Despesa';
import { DBService } from './../services/db.service';
import { Veiculo } from 'src/entidades/Veiculo';

@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.page.html',
  styleUrls: ['./nova-despesa.page.scss'],
})
export class NovaDespesaPage {
  
  veiculoList: Veiculo[];
  newDespesa: Despesa;
  
  constructor(public modalCntrl: ModalController, private dbService: DBService) {
    this.newDespesa = new Despesa;
    this.loadVeiculos();
   }

   private async loadVeiculos() {
    this.veiculoList = await this.dbService.listWithUIDs<Veiculo>('/Veiculos');
  }

  public back() {
    this.modalCntrl.dismiss();
  }
  
  public save() {
    this.dbService.insertInList<Despesa>('/Despesas', this.newDespesa)
    .then(() => {
      this.modalCntrl.dismiss(this.newDespesa)
    }).catch(error => {
      console.log(error);
    })
  }
}
