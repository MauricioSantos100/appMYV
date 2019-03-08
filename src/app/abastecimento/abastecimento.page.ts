import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Abastecimento } from './../../entidades/Abastecimento';
import { Observable } from 'rxjs';
import { NovaDespesaPage } from '../nova-despesa/nova-despesa.page';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-abastecimento',
  templateUrl: './abastecimento.page.html',
  styleUrls: ['./abastecimento.page.scss'],
})
export class AbastecimentoPage {

  abastecimentoDB: AngularFireList<Abastecimento>;
  abastecimentos: Observable<Abastecimento[]>;

  constructor(db: AngularFireDatabase, public modalCntrl: ModalController, public toast: ToastController, public router: Router) {
    this.abastecimentoDB = db.list<Abastecimento>("Abastecimentos");
    this.abastecimentos = this.abastecimentoDB.valueChanges();
    this.abastecimentos = this.abastecimentoDB.snapshotChanges().pipe(
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
          this.presentToast("Abasteciemnto salvo.");
        }
      }).catch(error => {
        this.presentToast("erro ao salvar.");
      })
    return modal.present();
  }

  private confirmAdd(abastecimento: Abastecimento) {
    this.abastecimentoDB.push(abastecimento);
  }

  async presentToast(mensagem: string) {
    const toast = this.toast.create({
      message: mensagem,
      duration: 2000
    })
  }

  public delete(key: string) {
    this.abastecimentoDB.remove(key)
      .then(result => {
        this.presentToast("Abastecimento Excluído");
      }).catch(error => {
        this.presentToast("erro ao deletar");
      })
  }

  view(abasteciemnto: Abastecimento) {
    this.router.navigate(["/tela-abastecimento"]);
    // this.navCtrl.push('/tela-manutencao', {
    //   manuten: Manutencao
    // )};
  }
}