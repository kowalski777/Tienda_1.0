import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ItemsService, Item } from "../../services/items.service";
import { ActivatedRoute ,Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:Item[]=[];
  usuario: any ={};
  canti: number;
  
  item: any ={};

  constructor( private auth: AuthService,
               private _itemsService: ItemsService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute) { 

                

      
      this._activatedRoute.params.subscribe(params =>{
      this.item = this._itemsService.getItem( params['id'] );
      });
               }


  ngOnInit() {
    
    this.usuario = localStorage.getItem('email'); // obtengo el usuario para mostrar quien esta logueado
    this.items= this._itemsService.getItems();    
    console.log(this.canti);
    this.cantidadObtener;


  }

  cantidadObtener(cant: number){
    this.canti = cant;

    for( let itm of this.items){
      cant  = itm.cantidad;

      return cant;
    }
  }

  

  verArticulo(index: number) {
  	//console.log( idx );
    this._router.navigate( ['/articulo',index] );
  }

  salir() {
    this.auth.logout();
    this._router.navigateByUrl('/login');
  }

}
