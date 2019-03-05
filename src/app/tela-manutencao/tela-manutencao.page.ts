import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-manutencao',
  templateUrl: './tela-manutencao.page.html',
  styleUrls: ['./tela-manutencao.page.scss'],
})
export class TelaManutencaoPage {

  constructor(public router: Router) { }

  save() {

  }

  back() {
    this.router.navigate(["/manutencao"]);
  }

}
