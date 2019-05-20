import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/entidades/Usuario';
import { DBService } from '../services/db.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  email: string;
  usuarios: Usuario[];
  usuario: Usuario;

  constructor(public router: Router, private dbService: DBService, private fAuth: AngularFireAuth, private toastCntrl: ToastController) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/login']);
    delete this.email;
  }

  async trocarSenha() {
    this.usuarios = await this.dbService.search<Usuario>('/Usuarios', 'email', this.email);
    this.usuario = this.usuarios[0];
    if (this.usuario) {
      this.fAuth.auth.sendPasswordResetEmail(this.usuario.email);
      this.presentToast("E-mail enviado, verifique sua caixa de entrada.");
    } else {
      this.presentToast("Não encontramos este e-mail cadastrado.");
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCntrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}