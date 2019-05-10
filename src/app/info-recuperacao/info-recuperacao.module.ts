import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoRecuperacaoPage } from './info-recuperacao.page';

const routes: Routes = [
  {
    path: '',
    component: InfoRecuperacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoRecuperacaoPage]
})
export class InfoRecuperacaoPageModule {}
