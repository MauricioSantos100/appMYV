import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      url: '/garagem',
      icon: 'logo-model-s'
    },
    {
      title: 'manutenção',
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
      title: 'Relatórios',
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
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
