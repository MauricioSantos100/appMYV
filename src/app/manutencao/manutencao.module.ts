import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManutencaoPage } from './manutencao.page';
import { NovaManutencaoPage } from '../nova-manutencao/nova-manutencao.page';
import { TelaManutencaoPage } from '../tela-manutencao/tela-manutencao.page';
import { EditarManutencaoPage } from '../editar-manutencao/editar-manutencao.page';

const routes: Routes = [
  {
    path: '',
    component: ManutencaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManutencaoPage, NovaManutencaoPage, EditarManutencaoPage, TelaManutencaoPage],
  entryComponents: [NovaManutencaoPage, EditarManutencaoPage, TelaManutencaoPage]
})
export class ManutencaoPageModule {}
