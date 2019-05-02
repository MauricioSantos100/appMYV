import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AbastecimentoPage } from './abastecimento.page';
import { NovoAbastecimentoPage } from '../novo-abastecimento/novo-abastecimento.page';
import { TelaAbastecimentoPage } from '../tela-abastecimento/tela-abastecimento.page';
import {MatExpansionModule} from '@angular/material/expansion';
import { EditarAbastecimentoPage } from '../editar-abastecimento/editar-abastecimento.page';

const routes: Routes = [
  {
    path: '',
    component: AbastecimentoPage
  }
];

@NgModule({
  imports: [
    MatExpansionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbastecimentoPage, NovoAbastecimentoPage, TelaAbastecimentoPage, EditarAbastecimentoPage],
  entryComponents: [NovoAbastecimentoPage, TelaAbastecimentoPage, EditarAbastecimentoPage]
})
export class AbastecimentoPageModule {}
