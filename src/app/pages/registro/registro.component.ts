import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
    //this.usuario.email="email@gmail.com";
    
  }

  onSubmit(form:NgForm){
    if ( form.invalid ){
      return;
    }
    
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: true
    });
    Swal.showLoading();

    this.auth.nuevoUsuario( this.usuario )
      .subscribe( resp =>{
        console.log(resp);
        Swal.close();
        
        if( this.recordarme ){
         localStorage.setItem('email', this.usuario.email);
       }

        this.router.navigateByUrl('/home');
      }, (err)=>{
        console.log("ERROR: " +err.error.error.message);
        Swal.fire({
          title: 'Error al Guardar',
          text: err.error.error.message,
          icon: 'error',
        });
      });
    
    //console.log('formulario enviado');
    //console.log(this.usuario);
    //console.log( form) ;
  }

}
