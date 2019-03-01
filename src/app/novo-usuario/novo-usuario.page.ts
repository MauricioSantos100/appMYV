import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/entidades/usuario';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.page.html',
  styleUrls: ['./novo-usuario.page.scss'],
})
export class NovoUsuarioPage {

 email: string;
 senha: string;
  
  constructor(public router: Router, private fAuth: AngularFireAuth, public toastCtrl: ToastController) {
    // this.novoUsuario = new Usuario;
   }

  save() {
    this.fAuth.auth.createUserWithEmailAndPassword(this.email, this.senha)
      .then(result => {
        this.presentToast('Usuário criado com sucesso');
        this.backToLogin();
      })
      .catch(error => {
        this.presentToast('Erro ao cadastrar usuário');
        console.log(error);
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
