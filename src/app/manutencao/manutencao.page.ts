import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ModalController, ToastController } from '@ionic/angular';
import { Manutencao } from 'src/entidades/Manutencao';
import { Observable } from 'rxjs';
import { NovaManutencaoPage } from './../nova-manutencao/nova-manutencao.page';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.page.html',
  styleUrls: ['./manutencao.page.scss'],
})
export class ManutencaoPage {

  manutencaoDB: AngularFireList<Manutencao>;
  manutencoes: Observable<Manutencao[]>;

  constructor(db: AngularFireDatabase, public modalctrl: ModalController, public toast: ToastController, public router: Router) {
    this.manutencaoDB = db.list<Manutencao>("Manutencoes");
    this.manutencoes = this.manutencaoDB.valueChanges();
    this.manutencoes = this.manutencaoDB.snapshotChanges().pipe(
      map(changens =>
        changens.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    )
  }

  async create() {
    const modal = await this.modalctrl.create({
      component: NovaManutencaoPage
    })

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmAdd(result.data);
          this.presentToast("Manuteção Salva.");
        }
      }).catch(error => {
        this.presentToast("Erro ao Salvar.");
      })
    return await modal.present();
  }

  private confirmAdd(manutencao: Manutencao) {
    this.manutencaoDB.push(manutencao);
  }

  async presentToast(mensagem: string) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: 1000
    })
  }

  public delete(key: string) {
    this.manutencaoDB.remove(key)
      .then(result => {
        this.presentToast("Veiculo Excluído");
      }).catch(error => {
        this.presentToast("erro ao deletar");
      })
  }

  view(manutecao: Manutencao) {
    this.router.navigate(["/tela-manutencao"]);
    // this.navCtrl.push('/tela-manutencao', {
    //   manuten: Manutencao
    // )};
  }
}
