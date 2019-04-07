import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'despesa',
        children: [
          {
            path: '',
            loadChildren: '../despesa/despesa.module#DespesaPageModule'
          }
        ]
      },
      {
        path: 'manutencao',
        children: [
          {
            path: '',
            loadChildren: '../manutencao/manutencao.module#ManutencaoPageModule'
          }
        ]
      },
      {
        path: 'abastecimento',
        children: [
          {
            path: '',
            loadChildren: '../abastecimento/abastecimento.module#AbastecimentoPageModule'
          }
        ]
      },
      {
        path: 'garagem',
        children: [
          {
            path: '',
            loadChildren: '../garagem/garagem.module#GaragemPageModule'
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }