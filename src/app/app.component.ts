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
      title: 'Despesa',
      url: '/tabs/despesa',
      icon: 'card',
    },
    {
      title: 'manutenção',
      url: '/tabs/manutencao',
      icon: 'construct',
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
