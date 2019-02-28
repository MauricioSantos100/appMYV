import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Usuario } from 'src/entidades/usuario';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(private fAuth: AngularFireAuth,public toastCtrl: ToastController,public modal: ModalController, public router: Router) { }

  login() {
    this.fAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
      .then(result => {
        this.router.navigate(["/home"])
      }).catch(error => {
        this.presentToast("E-mail e/ou Senha inválidos(s)");
        delete this.senha;
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
}
