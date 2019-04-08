import { Component } from '@angular/core';
import { Usuario } from 'src/entidades/Usuario';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.page.html',
  styleUrls: ['./novo-usuario.page.scss'],
})
export class NovoUsuarioPage {

  novoUsuario: Usuario;
  
  constructor(public router: Router, private fAuth: AngularFireAuth, public toastCtrl: ToastController) {
    this.novoUsuario = new Usuario;
   }

  save() {
    this.fAuth.auth.createUserWithEmailAndPassword(this.novoUsuario.email, this.novoUsuario.senha)
      .then(result => {
        this.presentToast('Usuário criado com sucesso');
        this.router.navigate(["/tabs/home"])
      })
      .catch(error => {
        this.presentToast('Erro ao cadastrar usuário');
      });
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

}