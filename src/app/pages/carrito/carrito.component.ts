import { Component, OnInit, Input } from '@angular/core';
import { ItemsService, Item } from "../../services/items.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  //items:Item[]=[];
  @Input() item: any = {}; //Con este Decorador Recibo cada item desde el template(Home)
  @Input() canti: number; 
  @Input() subTotal: number;
  


     constructor( private _itemsService:ItemsService,
                  private _activatedRoute:ActivatedRoute) { 

                  //Capturo el id del item   (el parametro ['id] se debe escribir = que en el app-routing-module )
                  this._activatedRoute.params.subscribe(params =>{
                    this.item = this._itemsService.getItem( params['id'] );
    });
    
                    //this.items = this._itemsService.getItems();


     }

  ngOnInit() {

    console.log(this.canti);

    

}



}

