import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Item, ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: any ={};
  items:Item[]=[];
  item: any[]=[];
  
  constructor( private auth: AuthService,
               private _router: Router,
               private _itemsService:ItemsService,
               private _activatedRoute:ActivatedRoute) { 

                this._activatedRoute.params.subscribe(params =>{
                this.item = _itemsService.getItem(params['termino'])   
                this.items = this._itemsService.getItems();
                })
                
               }


  ngOnInit() {

  }

  buscarItem( termino:string ){
    console.log(termino);
    this._router.navigate( ['/buscador', termino] );

  }




}
