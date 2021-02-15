import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ItemsService, Item, Newarr } from "../../services/items.service";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  items:Item[]=[];
  item: any ={};
  itemPrueba: Item;
  
  // --- Boton Añadir ---
  nArr:Newarr[]=[];
  
  usuario: any ={};
  
  badgeCounter: number;
  aux: number;
  
  constructor( private auth: AuthService,
               public _itemsService: ItemsService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute,
               private http:HttpClient) { 



                    this._activatedRoute.params.subscribe(params =>{
                    this.item = this._itemsService.getItem( params['id'] );
                    });
                }
  
  
  ngOnInit() {

    this.badgeCounter = this._itemsService.getNewarr().length; //cantidad de articulos añadidos al carrito
    this.items = this._itemsService.getItems();
    this.nArr = this._itemsService.getNewarr();
    this.usuario = localStorage.getItem('email'); // obtengo el usuario para mostrar quien esta logueado
   }

  cantidadObtener(cant: any, idx: any){
    if(cant==0){
      alert("La cantidad no puede ser igual a 0")
      return
    }

    for (let i = 0; i < this.items.length; i++) {
      const e = this.items[i];
      this.aux = cant;
      
      if(cant > e.stock){
        alert("No se puede comprar esta cantidad")
        return
      }

      if(cant <= e.stock){
        if(e.idx == idx && e.cantidad == 0) {
          e.nombre = e.nombre;
          e.precio = e.precio;
          e.img = e.img;
          e.idx = idx;
          e.cantidad = cant;
          e.subTotal = e.cantidad * e.precio;
  
          if(this.nArr[i]){
            for (let x = 0; x < this.nArr.length; x++) {
              const el = this.nArr[x];
             if(el.idx == e.idx){
               e.stock += -e.cantidad;
             }         
                       
            }
          }else{
            console.log("estoy aqui");
            e.stock += -e.cantidad;
          }
  
          this._itemsService.setNewArr(e);
          
          this.badgeCounter++;

       }
      }
    }
    console.log(this.items);
  }

  verArticulo(index: number) {
    this._router.navigate( ['/articulo',index] );
  }

  salir() {
    this.auth.logout();
    this._router.navigateByUrl('/login');
  }
  
}


