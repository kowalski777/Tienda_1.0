import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
    if( localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }

  }

  login( form: NgForm ){

    if ( form.invalid ){return;}

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: true
    });
    Swal.showLoading();

    this.auth.login( this.usuario )
      .subscribe( resp =>{
       console.log(resp);
       Swal.close();

       if( this.recordarme ){
         localStorage.setItem('email', this.usuario.email);
       }

       this.router.navigateByUrl('/home');
    }, (err) =>{
      console.log(err.error.error.message);
      Swal.fire({
        title: 'Error al autenticar',
        text: err.error.error.message,
        icon: 'error',
      });
    });
    //console.log("imprimir si esta validado");
    //console.log(this.usuario);
    //console.log(form);
  }

}
