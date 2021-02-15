import { Component, OnInit } from '@angular/core';
import { ItemsService, Item, Newarr } from "../../services/items.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  item: any = {};


     constructor( private _itemsService:ItemsService,
                  private _activatedRoute:ActivatedRoute,
                  private _router:Router) { 

                    this._activatedRoute.params.subscribe(params =>{
                          this.item = this._itemsService.getItem( params['id'] ); });
}

  ngOnInit() {
    
}

regresar() {
  this._router.navigate( ['/home'] );
}

}