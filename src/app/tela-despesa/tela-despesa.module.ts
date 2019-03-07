import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaDespesaPage } from './tela-despesa.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDespesaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaDespesaPage]
})
export class TelaDespesaPageModule {}
