import { Component } from '@angular/core';
import { Usuario } from 'src/entidades/Usuario';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.page.html',
  styleUrls: ['./novo-usuario.page.scss'],
})
export class NovoUsuarioPage {

  newUsuario: Usuario;
  email: string;
  senha: string;

  
  constructor(public router: Router, private fAuth: AngularFireAuth, public toastCtrl: ToastController, private dbService: DBService) {
    this.newUsuario = new Usuario;
   }

  save() {
    this.fAuth.auth.createUserWithEmailAndPassword(this.email, this.senha)
    this.newUsuario.email = this.email;
    this.dbService.insertInList<Usuario>('/Usuarios', this.newUsuario)
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