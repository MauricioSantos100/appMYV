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

  marcas: any[] = [
    {nome:'Agrale'}, 
    {nome:'Aston Martin'}, 
    {nome:'Audi'}, 
    {nome:'Bentley'},
    {nome:'BMW'},
    {nome:'Bugatti'},
    {nome:'Changan'},
    {nome:'Chery'},
    {nome:'GM/Chevrolet'},
    {nome:'Chrysler'},
    {nome:'Citroën'}, 
    {nome:'Dodge'}, 
    {nome:'Effa'},
    {nome:'Ferrari'},
    {nome:'Fiat'},
    {nome:'Ford'},
    {nome:'Geely'},
    {nome:'Hafei'},
    {nome:'Honda'}, 
    {nome:'Hyundai'}, 
    {nome:'Iveco'},
    {nome:'Jac Motors'},
    {nome:'Jaguar'},
    {nome:'Jeep'},
    {nome:'Jinbei'},
    {nome:'Kia'},
    {nome:'Koenigsegg‎'},
    {nome:'Lamborghini'}, 
    {nome:'Land Rover'},
    {nome:'Lexus'}, 
    {nome:'Lifan'},
    {nome:'Mahindra'},
    {nome:'Maserati'},
    {nome:'Mercedes-Benz'},
    {nome:'MG Motors'},
    {nome:'Mini'},
    {nome:'Mitsubishi'}, 
    {nome:'Nissan'}, 
    {nome:'Peugeot'},
    {nome:'Porsche'},
    {nome:'Ram'},
    {nome:'Renault'},
    {nome:'Smart'},
    {nome:'Ssangyong'},
    {nome:'Subaru'},
    {nome:'Suzuki'},
    {nome:'Toyota'},
    {nome:'Troller'},
    {nome:'Volkswagen'},
    {nome:'Volvo'}
  ];
}
