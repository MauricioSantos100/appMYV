import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Veiculo } from 'src/entidades/Veiculo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NovoVeiculoPage } from './../novo-veiculo/novo-veiculo.page';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { DBService } from './../services/db.service';
import { TelaVeiculoPage } from './../tela-veiculo/tela-veiculo.page';
import { Despesa } from 'src/entidades/Despesa';
=======
>>>>>>> parent of 4ec364d... atualizacoes, n resolvido

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.page.html',
  styleUrls: ['./garagem.page.scss'],
})
export class GaragemPage {

  veiculosDB: AngularFireList<Veiculo>;
  veiculos: Observable<Veiculo[]>;
  data: Veiculo;

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
<<<<<<< HEAD
    .then(result => {
      if(result.data) {
        this.confirmAdd();
      }
    });
    return await modal.present();
  }

  private confirmAdd() {
    this.presentToast('Veiculo na garagem.');
    this.loadVeiculos();
  }

  remove(uid: string) {
    this.dbService.remove('/Veiculos', uid)
    .then(() => {
      this.confirmRemove();
    }).catch(error => {
      this.presentToast('Erro ao remover.');
    })
  }

  private confirmRemove() {
    this.presentToast('Veiculo removido.');
    this.loadVeiculos();
  }

  async edit(veiculo: Veiculo) {
    const modal = await this.modalCtrl.create({
      component: TelaVeiculoPage,
      componentProps: {
        editingVeiculo: Veiculo
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmAdd();
        }
      });

    return  await modal.present();
=======
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
>>>>>>> parent of 4ec364d... atualizacoes, n resolvido
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

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'nome': 'string',
        'marca': 'string',
        'modelo': 'string',
        'placa': 'string',
        'anoModelo': 'string',
        'anoFabricacao': 'string',
        'cor': 'string',
        'metragem': 'string',
        'combustivel': 'string',
        'tanque': 'string',
        'chassi': 'string',
        'renavam': 'string',
        'observacao': 'string',
      };
    }, 5000);
  }
}
