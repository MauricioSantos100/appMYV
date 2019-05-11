import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController, MenuController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  email: string;
  senha: string;
  private loading: any;

  constructor(private fAuth: AngularFireAuth, public toastCtrl: ToastController, public router: Router,
     private menuCntrl: MenuController, private loadingCntrl: LoadingController) {
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

  async presentLoading() {
    this.loading = await this.loadingCntrl.create({
      message: 'Por favor, aguarde...'});
    return this.loading.present();
  }

  newUser() {
    this.router.navigate(['/novo-usuario']);
  }

  esqueceuASenha() {
    this.router.navigate(['/recuperar-senha']);
  }

  ngOnInit(): void {
    this.menuCntrl.enable(false);
  }

  ngOnDestroy() {
    this.menuCntrl.enable(true);
  }

}
