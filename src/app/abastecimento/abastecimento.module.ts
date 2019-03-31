import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AbastecimentoPage } from './abastecimento.page';
import { NovoAbastecimentoPage } from '../novo-abastecimento/novo-abastecimento.page';
import { TelaAbastecimentoPage } from '../tela-abastecimento/tela-abastecimento.page';

const routes: Routes = [
  {
    path: '',
    component: AbastecimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbastecimentoPage, NovoAbastecimentoPage, TelaAbastecimentoPage],
  entryComponents: [NovoAbastecimentoPage, TelaAbastecimentoPage]
})
export class AbastecimentoPageModule {}
