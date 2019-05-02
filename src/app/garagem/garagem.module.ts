import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GaragemPage } from './garagem.page';
import { TelaVeiculoPage } from '../tela-veiculo/tela-veiculo.page';
import { NovoVeiculoPage } from '../novo-veiculo/novo-veiculo.page';
import { EditarVeiculoPage } from '../editar-veiculo/editar-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: GaragemPage
  }
];

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GaragemPage, NovoVeiculoPage, TelaVeiculoPage, EditarVeiculoPage],
  entryComponents: [NovoVeiculoPage, TelaVeiculoPage, EditarVeiculoPage]
})
export class GaragemPageModule {}
