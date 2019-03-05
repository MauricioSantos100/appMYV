import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaManutencaoPage } from './tela-manutencao.page';

const routes: Routes = [
  {
    path: '',
    component: TelaManutencaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaManutencaoPage]
})
export class TelaManutencaoPageModule {}
