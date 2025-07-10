import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosPrincipalComponent } from './productos-principal/productos-principal.component';
import { AboutComponent } from './about/about.component';
import { VeterinariaPrincipalComponent } from './veterinaria-principal/veterinaria-principal.component';

const routes: Routes = [
  {path: '', redirectTo: '/veterinaria', pathMatch: 'full' },
  {path: 'veterinaria', component: VeterinariaPrincipalComponent},
  {path: 'productos', component: ProductosPrincipalComponent},
  {path: 'about',     component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
