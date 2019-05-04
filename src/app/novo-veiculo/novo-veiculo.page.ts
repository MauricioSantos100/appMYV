import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { DBService } from '../services/db.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.page.html',
  styleUrls: ['./novo-veiculo.page.scss'],
})
export class NovoVeiculoPage {

  newVeiculo: Veiculo;
  
  constructor(public modalCntrl: ModalController, private dbService: DBService, private afAuth: AngularFireAuth) {
    this.newVeiculo = new Veiculo;
   }

  public back() {
    this.modalCntrl.dismiss();
  }
  
  public save() {
    this.newVeiculo.usuarioEmail = this.afAuth.auth.currentUser.email;
    this.dbService.insertInList<Veiculo>('/Veiculos', this.newVeiculo)
    .then(() => {
      this.modalCntrl.dismiss(this.newVeiculo)
    }).catch(error => {
      console.log(error);
    })
  }
}
