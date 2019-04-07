import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/entidades/Usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario: Usuario;

  constructor(private fAuth: AngularFireAuth, public toastCtrl: ToastController, public router: Router) {
    this.usuario = new Usuario;
   }

  login() {
    this.fAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha)
      .then(result => {
        this.router.navigate(["/tabs/home"])
      }).catch(error => {
        this.presentToast("E-mail e/ou Senha inválidos(s)");
        delete this.usuario.senha;
      });
  }

  logout() {
    this.fAuth.auth.signOut();
  };

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  newUser() {
    this.router.navigate(['/novo-usuario']);
  }
  // desabilita o side menu no login
  // ionViewWillEnter() {
  //   this.menuCntrl.enable(false);
  // }
}
