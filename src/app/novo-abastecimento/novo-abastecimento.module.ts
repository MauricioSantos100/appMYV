import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoAbastecimentoPage } from './novo-abastecimento.page';

const routes: Routes = [
  {
    path: '',
    component: NovoAbastecimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoAbastecimentoPage]
})
export class NovoAbastecimentoPageModule {}
