import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private fAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  logout() {
    this.fAuth.auth.signOut()
    .then(resut => {
      this.router.navigate(["/login"]);
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}