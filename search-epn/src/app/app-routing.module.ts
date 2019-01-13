import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { MisArticulosComponent } from './mis-articulos/mis-articulos.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'busqueda', component:BusquedaComponent},
  { path: 'biblioteca', component:BibliotecaComponent},
  { path: 'crear_mis_articulos', component:MisArticulosComponent},
  { path: 'recomendaciones', component:RecomendacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }