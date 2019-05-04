import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public menuCntrl: MenuController) { }

  ngOnInit(): void {
    this.menuCntrl.enable(true);
  }
}
