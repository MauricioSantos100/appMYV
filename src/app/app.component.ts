import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DBService } from './services/db.service';
import { Veiculo } from 'src/entidades/Veiculo';
import { Usuario } from 'src/entidades/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'Garagem',
      url: '/tabs/garagem',
      icon: 'logo-model-s'
    },
    {
      title: 'Manutenção',
      url: '/tabs/manutencao',
      icon: 'construct',
    },
    {
      title: 'Despesa',
      url: '/tabs/despesa',
      icon: 'card',
    },
    {
      title: 'Abastecimento',
      url: '/tabs/abastecimento',
      icon: 'water',
    },
    {
      title: 'Relatório',
      url: '',
      icon: 'stats',
    },
    {
      title: 'Configuração',
      url: '',
      icon: 'settings',
    }
  ];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private router: Router, private fAuth: AngularFireAuth, private dbService: DBService) {
    this.initializeApp();
    this.init();
  }

  logout() {
    this.fAuth.auth.signOut()
      .then(resut => {
        this.router.navigate(["/login"]);
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  veiculoList: Veiculo[];
  veiculoUID: string;
  userEmail: string;
  usuarios: Usuario[];
  usuario: Usuario;

  private async init() {
    await this.loadVeiculos();
  }

  private async loadVeiculos() {
    this.fAuth.user.subscribe(async user => {
      if (user) {
        this.userEmail = user.email;
        this.veiculoList = await this.dbService.search<Veiculo>('/Veiculos', 'usuarioEmail', this.userEmail);
        await this.loadUser();
      }
    });
  }

  private async loadUser() {
    this.usuarios = await this.dbService.search<Usuario>('/Usuarios', 'email', this.userEmail);
    this.usuario = this.usuarios[0];
  }
}