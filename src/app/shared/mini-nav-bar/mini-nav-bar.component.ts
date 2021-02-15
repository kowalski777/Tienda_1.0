import { Component, EventEmitter, Output , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ItemsService, Newarr } from "../../services/items.service";


@Component({
  selector: 'app-mini-nav-bar',
  templateUrl: './mini-nav-bar.component.html',
  styleUrls: ['./mini-nav-bar.component.css']
})
export class MiniNavBarComponent implements OnInit {

  items:Newarr[]=[];
  usuario: any ={};

  constructor( private auth: AuthService,
               private router: Router,
               private _itemsService: ItemsService) { 
                }

  ngOnInit(){

    this.usuario = localStorage.getItem('email'); // obtengo el usuario para mostrar quien esta logueado
    this.items = this._itemsService.getNewarr();
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
  


  
}
