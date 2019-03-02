import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ModalController, ToastController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NovoVeiculoPage } from './../novo-veiculo/novo-veiculo.page';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.page.html',
  styleUrls: ['./garagem.page.scss'],
})
export class GaragemPage {

  veiculosDB: AngularFireList<Veiculo>;
  Veiculos: Observable<Veiculo[]>;

  constructor(db: AngularFireDatabase, public modalContrl: ModalController, public toast: ToastController) {
    this.veiculosDB = db.list<Veiculo>("Veiculos");
    this.Veiculos = this.veiculosDB.valueChanges();
    this.Veiculos = this.veiculosDB.snapshotChanges().pipe(
      map(changens =>
        changens.map(c => ({key: c.payload.key, ...c.payload.val()})))
    )
   }

   async add() {
     const modal = await this.modalContrl.create({
       component: NovoVeiculoPage
     })

     modal.onDidDismiss()
     .then(result => {
       if(result.data) {
         this.confirmAdd(result.data);
         this.presentToast("Veículo Salvo");
       }
     }).catch(error => {
      this.presentToast("Erro ao salvar");
     })
     return await modal.present();
   }

   private confirmAdd(veiculo: Veiculo) {
     this.veiculosDB.push(veiculo);
   }

   async presentToast(mensage: string) {
     const toast = await this.toast.create({
       message: mensage,
       duration: 2000
     });
     toast.present();
   }

   public delete(key: string) {
    this.veiculosDB.remove(key)
    .then(result => {
      this.presentToast("Veiculo Excluído");
    }).catch(error => {
      this.presentToast("erro ao deletar");
    })
  }
}
