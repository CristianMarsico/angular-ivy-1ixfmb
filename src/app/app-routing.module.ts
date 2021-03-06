import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetallesComponent } from './detalles/detalles.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PrincipalComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'detalles',
    component: DetallesComponent
  },
  {
    path: 'general/:id',
    component: DetallesComponent
  },
  {
    path: 'nosotros',
    component: SobreNosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
