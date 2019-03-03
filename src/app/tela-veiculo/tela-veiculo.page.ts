import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-veiculo',
  templateUrl: './tela-veiculo.page.html',
  styleUrls: ['./tela-veiculo.page.scss'],
})
export class TelaVeiculoPage {

  constructor(public router: Router) { }

  save() {

  }

  back() {
    this.router.navigate(["/garagem"]);
  }

}
