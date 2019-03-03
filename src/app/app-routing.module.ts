import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'novo-usuario', loadChildren: './novo-usuario/novo-usuario.module#NovoUsuarioPageModule' },
  { path: 'garagem', loadChildren: './garagem/garagem.module#GaragemPageModule' },  { path: 'tela-veiculo', loadChildren: './tela-veiculo/tela-veiculo.module#TelaVeiculoPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
