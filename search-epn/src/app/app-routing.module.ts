import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { MisArticulosComponent } from './mis-articulos/mis-articulos.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { RecomendadorLuceneComponent } from './recomendador-lucene/recomendador-lucene.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'busqueda', component:BusquedaComponent},
  { path: 'biblioteca', component:BibliotecaComponent},
  { path: 'crear_mis_articulos', component:MisArticulosComponent},
  { path: 'recomendaciones', component:RecomendacionesComponent},
  { path: 'recomendaciones-lucene', component:RecomendadorLuceneComponent},
  { path: '**', component: PageNotFoundComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
