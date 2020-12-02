import { Component, OnInit, Input } from '@angular/core';
import { ItemsService, Item } from "../../services/items.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
 
  item: any = {}; //le paso los items con su id particular al template html
 
  @Input() canti: number; 
  @Input() subTotal: number;

     constructor( private _itemsService:ItemsService,
                  private _activatedRoute:ActivatedRoute) { 
    
    //Capturo el id del item   (el parametro ['id] se debe escribir = que en el app-routing-module )
     this._activatedRoute.params.subscribe(params =>{
       this.item = this._itemsService.getItem( params['id'] );
     });


     }

  ngOnInit() {

}

}