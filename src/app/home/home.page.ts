import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Manutencao } from './../../entidades/Manutencao';
import { DBService } from './../services/db.service';
import { Despesa } from './../../entidades/Despesa';
import { Abastecimento } from 'src/entidades/Abastecimento';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  manutencoes: Manutencao[];
  despesas: Despesa[];
  abastecimentos: Abastecimento[];
  loading: boolean;

  constructor(public menuCntrl: MenuController, private dbService: DBService) {
    this.init();
  }


  private init() {
    this.loading = true;
    this.dbService.listAndWatch<Abastecimento>('/Abastecimentos')
      .subscribe(data => this.loadAbastecimentos());

    this.dbService.listAndWatch<Despesa>('/Despesas')
      .subscribe(data => this.loadDespesas());

    this.dbService.listAndWatch<Manutencao>('/Manutencoes')
      .subscribe(data => this.loadManutencao());

    this.loading = false;
  }

  private async loadAbastecimentos() {
    this.dbService.listWithUIDs<Abastecimento>('/Abastecimentos')
      .then(Abastecimentos => {
        this.abastecimentos = Abastecimentos;
      }).catch(error => {
        console.log(error);
      });
  }

  private async loadDespesas() {
    this.dbService.listWithUIDs<Despesa>('/Despesas')
      .then(Despesas => {
        this.despesas = Despesas;
        this.loading = false;
      }).catch(error => {
        console.log(error);
      });
  }

  private async loadManutencao() {
    this.dbService.listWithUIDs<Manutencao>('/Manutencoes')
      .then(Manutencoes => {
        this.manutencoes = Manutencoes;
        this.loading = false;
      }).catch(error => {
        console.log(error);
      });
  }

  slideOpts = {
    effect: 'slide',
    speed: 600,
    loop: true,
    zoom: false,
    autoplay: {
      delay: 8000,
    },
  };

  ngOnInit(): void {
    this.menuCntrl.enable(true);
  }


}
