import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  private items: Item[] = [
    {
      nombre: "Aguacate",
      precio: 100,
      img: "assets/images/aguacate.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 0


    },
    {
      nombre: "Ajo",
      precio: 50,
      img: "assets/images/ajo.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 1

    },
    {
      nombre: "Almendras",
      precio: 130,
      img: "assets/images/almendras.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 2

    },
    {
      nombre: "Arandanos",
      precio: 150,
      img: "assets/images/arandanos.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 3
    },
    {
      nombre: "Brocoli",
      precio: 130,
      img: "assets/images/brocoli.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 4

    },
    {
      nombre: "Calabaza",
      precio: 130,
      img: "assets/images/calabaza.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 5

    },
    {
      nombre: "Canela",
      precio: 130,
      img: "assets/images/canela.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 6

    },
    {
      nombre: "Cebolla",
      precio: 130,
      img: "assets/images/cebolla.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 7

    },
    {
      nombre: "Fresa",
      precio: 130,
      img: "assets/images/fresa.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 8

    },
    {
      nombre: "Kiwi",
      precio: 130,
      img: "assets/images/kiwi.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 9

    },
    {
      nombre: "Limon",
      precio: 130,
      img: "assets/images/limon.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 10

    },
    {
      nombre: "Lychee",
      precio: 130,
      img: "assets/images/lychee.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 11

    },
    {
      nombre: "Maiz",
      precio: 130,
      img: "assets/images/maiz.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 12

    },
    {
      nombre: "Manzana",
      precio: 130,
      img: "assets/images/manzana.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 13

    },
    {
      nombre: "Naranja",
      precio: 130,
      img: "assets/images/naranja.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 14

    },
    {
      nombre: "Papa",
      precio: 130,
      img: "assets/images/papa.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 15

    },
    {
      nombre: "Pasta",
      precio: 130,
      img: "assets/images/pasta.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 16

    },
    {
      nombre: "Pimienta",
      precio: 130,
      img: "assets/images/pimienta.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 17

    },
    {
      nombre: "Repollo",
      precio: 130,
      img: "assets/images/repollo.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 18

    },
    {
      nombre: "Tomate",
      precio: 130,
      img: "assets/images/tomate.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 19

    },
    {
      nombre: "Zanahoria",
      precio: 130,
      img: "assets/images/zanahoria.jpg",
      stock: 1000,
      cantidad: 0,
      subTotal: 0,
      idx: 20

    }
  ];
  constructor(private http:HttpClient) {


    console.log("El Servicio 'item.service' esta listo para usar");


  }


  //private url='https://crud-a5a5b.firebaseio.com';
  // crearArticulo(items: Item){
  //   return this.http.post(`${this.url}/items.json`, items)
  // }


  getItem(idx: string) {
    return this.items[idx];
  }

  getItems(): Item[] {
    return this.items;
  }

  setItems(a: Item){
    this.items.push(a)
  }


  //------------para el NewArr --------------
  public newArr: Newarr[] = [];

  getNewarr(): Newarr[] {
    return this.newArr;
  }

  setNewArr(a: Newarr){
    this.newArr.push(a)
  }

  // getItemNewArr(idx: string): Newarr[] {
  // getItemNewArr(idx: string){  
  //  return this.newArr[idx];
  // }

//-------------------------------------------

buscarItems( termino:string ):Item[]{
  let busquedaArr:Item[] = [];
  termino = termino.toLowerCase();
  for( let i = 0; i < this.items.length; i ++ ){
    let item = this.items[i];
    let nombre = item.nombre.toLowerCase();
    if( nombre.indexOf( termino ) >= 0  ){
      item.idx = i;
      busquedaArr.push( item )
    }
  }
  return busquedaArr;
}



}

export interface Item {
  nombre: string;
  precio: number;
  img: string;
  stock: number;
  cantidad: number;
  subTotal: number;
  idx: number;
  // idx?: number;

};

export interface Newarr {
  nombre: string;
  precio: number;
  img: string,
  stock: number;
  cantidad: number;
  subTotal: number;
  idx: number;
}




