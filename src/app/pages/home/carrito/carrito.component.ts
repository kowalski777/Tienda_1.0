import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ItemsService, Newarr, Item} from "../../../services/items.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  listaItems:Item[]=[]
  items:Newarr[]=[]; 
  total:number = 0;
  usuario: any ={};
   
  constructor( private auth: AuthService,
    private _itemsService: ItemsService,
    private _router: Router,
    private _activatedRoute:ActivatedRoute) { 
    
    this.listaItems = this._itemsService.getItems();
    this.items = this._itemsService.getNewarr();        
  }


ngOnInit() {
  this.usuario = localStorage.getItem('email'); // obtengo el usuario para mostrar quien esta logueado
  this.totalSuma();
}

restarDelStock(){
    // itero el array " items " que contendra los articulos agregados cuando le de añadir en el carrito
  for (let i = 0; i < this.items.length; i++) {  
    const e = this.items[i];
    this.items.splice(i, this.items.length); //elimino todos los elementos del arreglo
  }
  this.total = 0;
  alert("Tu Compra a sido un Exito!!")  
  this.reload()
}

btnCancelar(){
for (let i = 0; i < this.items.length; i++) {  
const e = this.items[i];
this.items.splice(i, this.items.length); 
}
this.total = 0;
alert("Tu Compra a sido Cancelada!!")  
this.reload()
}


   
reload(){
  this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this._router.navigate(['/home']));
  location.reload();
}

totalSuma(){
  for (let i = 0; i < this.items.length; i++) {
    this.total = this.total + this.items[i].subTotal;
  }
}

volver() {
    this._router.navigate( ['/home'] );
}

salir() {
  this.auth.logout();
  this._router.navigateByUrl('/login');
}
 

}


// for (let y = 0; y < this.listaItems.length; y++) {
//   const elem = this.items[y];
  
//   if(elem.idx == e.idx && e.cantidad > 0){
//   elem.nombre = e.nombre;
//   elem.precio = e.precio;
//   elem.img = e.img;
//   elem.cantidad = e.cantidad;  
//   }
//   elem.idx = e.idx;
//   this._itemsService.setNewArr(e);
// }