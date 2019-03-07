import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ModalController, ToastController } from '@ionic/angular';
import { Despesa } from 'src/entidades/Despesa';
import { Observable } from 'rxjs';
import { NovaDespesaPage } from '../nova-despesa/nova-despesa.page';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.page.html',
  styleUrls: ['./despesa.page.scss'],
})
export class DespesaPage {

  despesaDB: AngularFireList<Despesa>;
  despesas: Observable<Despesa[]>;

  constructor(db: AngularFireDatabase, public modalCntrl: ModalController, public toast: ToastController, public router: Router) {
    this.despesaDB = db.list<Despesa>("Despesas");
    this.despesas = this.despesaDB.valueChanges();
    this.despesas = this.despesaDB.snapshotChanges().pipe(
      map(changens =>
        changens.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    )
  }

  async create() {
    const modal = await this.modalCntrl.create({
      component: NovaDespesaPage
    })

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmAdd(result.data);
          this.presentToast("Despesa Salva.");
        }
      }).catch(error => {
        this.presentToast("Erro ao salvar.")
      })
    return await modal.present();
  }

  private confirmAdd(despesa: Despesa) {
    this.despesaDB.push(despesa);
  }

  async presentToast(mensagem: string) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: 2000
    })
  }

  public delete(key: string) {
    this.despesaDB.remove(key)
      .then(result => {
        this.presentToast("Veiculo Excluído");
      }).catch(error => {
        this.presentToast("erro ao deletar");
      })
  }

  view(despesa: Despesa) {
    this.router.navigate(["/tela-despesa"]);
    // this.navCtrl.push('/tela-manutencao', {
    //   manuten: Manutencao
    // )};
  }
}
