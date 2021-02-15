import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { CarritoComponent } from "./pages/home/carrito/carrito.component";
import { BuscadorComponent } from "./pages/buscador/buscador.component";

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate:[ AuthGuard ] },
  { path: 'buscador/:termino'    , component: BuscadorComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'articulo/:id', component: ArticuloComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
