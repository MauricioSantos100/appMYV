import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController, MenuController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  email: string;
  senha: string;

  constructor(private fAuth: AngularFireAuth, public toastCtrl: ToastController, public router: Router, private menuCntrl: MenuController) {
   }

  login() {
    this.fAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
      .then(result => {
        this.router.navigate(["/tabs/home"])
      }).catch(error => {
        this.presentToast("E-mail e/ou Senha inválidos(s)");
        delete this.senha;
      });
  }

  loginG() {
    this.fAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        firebase.auth.Auth.Persistence.LOCAL
        this.router.navigate(["/tabs/home"])
      }).catch(error => {
        console.log(error)
      });
  }

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

  ngOnInit(): void {
    this.menuCntrl.enable(false);
  }
}
