import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaVeiculoPage } from './tela-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: TelaVeiculoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaVeiculoPage],
  entryComponents: []
})
export class TelaVeiculoPageModule {}
