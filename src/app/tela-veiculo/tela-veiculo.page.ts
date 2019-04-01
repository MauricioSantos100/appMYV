import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-veiculo',
  templateUrl: './tela-veiculo.page.html',
  styleUrls: ['./tela-veiculo.page.scss'],
})
export class TelaVeiculoPage {

<<<<<<< HEAD
<<<<<<< HEAD
  editingVeiculo: Veiculo;
  newVeiculo: Veiculo;

  constructor(public modalCntrl: ModalController, private dbService: DBService) { }
=======
  constructor(public router: Router) { }

  save() {
>>>>>>> parent of 4ec364d... atualizacoes, n resolvido

  }

<<<<<<< HEAD
  public back() {
    this.modalCntrl.dismiss();
  }

  public save() {
    const updatingObject = {nome: this.newVeiculo.nome};
    this.dbService.update('/Veiculos', updatingObject)
    .then(() => {
      this.modalCntrl.dismiss(this.newVeiculo);
    }).catch(error => {
      console.log(error);
    });
  }
=======
  back() {
    this.router.navigate(["/garagem"]);
  }

>>>>>>> parent of 4ec364d... atualizacoes, n resolvido
=======
  constructor(public router: Router) { }

  save() {

  }

  back() {
    this.router.navigate(["/garagem"]);
  }

>>>>>>> parent of 4ec364d... atualizacoes, n resolvido
}
