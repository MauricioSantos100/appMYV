import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-despesa',
  templateUrl: './tela-despesa.page.html',
  styleUrls: ['./tela-despesa.page.scss'],
})
export class TelaDespesaPage {

  constructor(public router: Router) { }

  save() {

  }

  back() {
    this.router.navigate(["/tabs/despesa"]);
  }

}
