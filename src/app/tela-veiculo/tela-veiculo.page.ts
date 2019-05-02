import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/entidades/Veiculo';
import { ModalController, ToastController } from '@ionic/angular';
import { EditarVeiculoPage } from '../editar-veiculo/editar-veiculo.page';
import { Router } from '@angular/router';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-tela-veiculo',
  templateUrl: './tela-veiculo.page.html',
  styleUrls: ['./tela-veiculo.page.scss'],
})
export class TelaVeiculoPage implements OnInit{

  viewVeiculo = Veiculo;

  constructor(public modalCntrl: ModalController, private toastCntrl: ToastController, public router: Router, private dbService: DBService) { }

  ngOnInit() {
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  remove(uid: string) {
    this.dbService.remove('/Veiculos', uid)
    .then(() => {
      this.presentToast("Veículo excluido");
      this.modalCntrl.dismiss();
    }).catch(error => {
      this.presentToast("Erro ao remover.");
    })
  }
  
  async edit(veiculo: Veiculo) {
    const modal = await this.modalCntrl.create({
      component: EditarVeiculoPage,
      componentProps: {
        editingVeiculo: veiculo
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.presentToast("Informações atualizadas");
        }
      });

    return await modal.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCntrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
