import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterEvent, Router, NavigationEnd } from '@angular/router';
import * as firebase from 'firebase';

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
    },
    {
      title: 'Sair',
      url: '',
      icon: 'log-out',
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

  // logout() {
  //   console.log(firebase.auth().currentUser.email);
  //   firebase.auth().signOut();

  //   console.log("teste");
  // };

  // ngOnInit() {
  //   this.router.events.subscribe((event: RouterEvent) => {
  //     if (event instanceof NavigationEnd) {
  //       this.appPages.map(p => {
  //         return p['active'] = (event.url === p.url);
  //       });
  //     }
  //   });
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
