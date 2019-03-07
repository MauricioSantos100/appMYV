import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NovoVeiculoPage } from './../novo-veiculo/novo-veiculo.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.page.html',
  styleUrls: ['./garagem.page.scss'],
})
export class GaragemPage {

  veiculosDB: AngularFireList<Veiculo>;
  veiculos: Observable<Veiculo[]>;

  constructor(db: AngularFireDatabase, public modalCtrl: ModalController, public toast: ToastController, public router: Router, public navCtrl: NavController) {
    this.veiculosDB = db.list<Veiculo>("Veiculos");
    this.veiculos = this.veiculosDB.valueChanges();
    this.veiculos = this.veiculosDB.snapshotChanges().pipe(
      map(changens =>
        changens.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    )
  }

  async create() {
    const modal = await this.modalCtrl.create({
      component: NovoVeiculoPage
    })

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
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
      duration: 1000
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

  view(veiculo: Veiculo) {
    this.router.navigate(["/tela-veiculo"]);
    // this.navCtrl.push('/tela-veiculo', {
    //   car: veiculo
    // )};
  }

}
