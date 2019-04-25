import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/entidades/Veiculo';
import { ModalController, ToastController } from '@ionic/angular';
import { EditarVeiculoPage } from '../editar-veiculo/editar-veiculo.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-veiculo',
  templateUrl: './tela-veiculo.page.html',
  styleUrls: ['./tela-veiculo.page.scss'],
})
export class TelaVeiculoPage implements OnInit{

  viewVeiculo = Veiculo;
  editingVeiculo = Veiculo;

  constructor(public modalCntrl: ModalController, private toastCntrl: ToastController, public router: Router) { }

  ngOnInit() {
    if(this.viewVeiculo) {
      this.editingVeiculo = this.viewVeiculo;
    }
  }

  public back() {
    this.modalCntrl.dismiss();
  }

  async edit(viewVeiculo: Veiculo) {
    const modal = await this.modalCntrl.create({
      component: EditarVeiculoPage,
      componentProps: {
        editingVeiculo: viewVeiculo
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.presentToast("Veículo alterado");
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
