import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarAbastecimentoPage } from './editar-abastecimento.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAbastecimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarAbastecimentoPage]
})
export class EditarAbastecimentoPageModule {}
