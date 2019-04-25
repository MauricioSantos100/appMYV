import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarVeiculoPage } from './editar-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarVeiculoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EditarVeiculoPage],
  entryComponents: []
})
export class EditarVeiculoPageModule {}
