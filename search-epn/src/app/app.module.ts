import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { MisArticulosComponent } from './mis-articulos/mis-articulos.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BusquedaComponent,
    BibliotecaComponent,
    MisArticulosComponent,
    RecomendacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
