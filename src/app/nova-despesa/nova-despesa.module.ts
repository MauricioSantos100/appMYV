import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovaDespesaPage } from './nova-despesa.page';

const routes: Routes = [
  {
    path: '',
    component: NovaDespesaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovaDespesaPage]
})
export class NovaDespesaPageModule {}
