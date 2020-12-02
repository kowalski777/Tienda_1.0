import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  private items:Item[] = [
    {
      nombre: "Aguacate",
      precio: 100,
      img: "assets/images/aguacate.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 


    },
    {
      nombre: "Ajo",
      precio: 50,
      img: "assets/images/ajo.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Almendras",
      precio: 130,
      img: "assets/images/almendras.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Arandanos",
      precio: 150,
      img: "assets/images/arandanos.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 
    },
    {
      nombre: "Brocoli",
      precio: 130,
      img: "assets/images/brocoli.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Calabaza",
      precio: 130,
      img: "assets/images/calabaza.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Canela",
      precio: 130,
      img: "assets/images/canela.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Cebolla",
      precio: 130,
      img: "assets/images/cebolla.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Fresa",
      precio: 130,
      img: "assets/images/fresa.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Kiwi",
      precio: 130,
      img: "assets/images/kiwi.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Limon",
      precio: 130,
      img: "assets/images/limon.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Lychee",
      precio: 130,
      img: "assets/images/lychee.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Maiz",
      precio: 130,
      img: "assets/images/maiz.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Manzana",
      precio: 130,
      img: "assets/images/manzana.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Naranja",
      precio: 130,
      img: "assets/images/naranja.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Papa",
      precio: 130,
      img: "assets/images/papa.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Pasta",
      precio: 130,
      img: "assets/images/pasta.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Pimienta",
      precio: 130,
      img: "assets/images/pimienta.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Repollo",
      precio: 130,
      img: "assets/images/repollo.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Tomate",
      precio: 130,
      img: "assets/images/tomate.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    },
    {
      nombre: "Zanahoria",
      precio: 130,
      img: "assets/images/zanahoria.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0 

    }
  ];
  constructor(){
    console.log("El Servicio 'item.service' esta listo para usar");

  
}



getCantidades(cantidad:number){


  return this.items[cantidad];
}


getItem( idx: string){
  return this.items[idx];
}

getItems():Item[]{
  return this.items;
}

buscarItems( termino: string):Item[]{
  let itemsArr:Item[] = [];
  termino = termino.toLowerCase();
  
    for( let item of this.items){
    let nombre = item.nombre.toLowerCase();
    if( nombre.indexOf( termino ) >=0 ){
      itemsArr.push( item ) 
      }
    }
    return itemsArr;
  }

  



}



export interface Item{
  nombre: string;
  precio: number;
  img: string;
  stock: number;
  cantidad: number;
  subTotal: number;
  idx?: number;
};

