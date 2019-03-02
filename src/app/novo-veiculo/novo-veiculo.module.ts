import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoVeiculoPage } from './novo-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: NovoVeiculoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoVeiculoPage]
})
export class NovoVeiculoPageModule {}
