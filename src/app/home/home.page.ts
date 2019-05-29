import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public menuCntrl: MenuController) { }

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
