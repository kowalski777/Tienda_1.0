import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService, Newarr} from '../../services/items.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  items:any[] = []
  termino: string;
  
  constructor( private activatedRoute:ActivatedRoute,
           private _itemsService:ItemsService,
           private _router:Router) {

            this.activatedRoute.params.subscribe( params => {
              this.termino = params['termino'];
              this.items = this._itemsService.buscarItems( params['termino'] );
              })
    }

 ngOnInit(){

  }

  cantidadObtener(cant: any, idx: any){
    for (let i = 0; i < this.items.length; i++) {
      const e = this.items[i];
  
      if((e.idx == idx && e.cantidad == 0) && (cant > 0 && cant < e.stock) ){
      e.nombre = e.nombre;
      e.precio = e.precio;
      e.img = e.img;
      e.cantidad = cant;
      e.subTotal = cant * e.precio;
      e.idx = idx;
      this._itemsService.setNewArr(e);
     }
     else if (e.idx == idx && e.cantidad > 0){
      e.cantidad = cant;  
      e.subTotal = cant * e.precio;
      }
    }
}

  verArticulo(index: number) {
    this._router.navigate( ['/articulo',index] );
  }







}
