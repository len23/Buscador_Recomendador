import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/* const httpOptions = {
  headers: new HttpHeaders({ 'id': 'http://ieee.rkbexplorer.com' })
}; */
@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http:HttpClient) { }


  // base_url = 'https://recommender-systems.000webhostapp.com';
  base_url = '';
  // url_server = '192.168.1.4'
  url_server = 'http://localhost:8080/'
  // base_url = ""
  getResultados(txtInput:string):Observable<any[]>{
    const url= this.url_server+"JavaAPI/api/articulos/getBusquedaIEEE/?Busqueda="+txtInput;
   return this.http.get<any[]>(url);
  }

  getDetalleArticulo(query3:string):Observable<any>{
    let id='http://ieee.rkbexplorer.com';
    let httpOptions = {
      headers: new HttpHeaders({ 'id': id })
    };
    const url="/sparql/?format=json&query="+encodeURIComponent(query3);
    return this.http.get<any>(url,httpOptions)

  }

  getUrl():Observable<any>{
    const url="http://localhost:3000/api/customers?filter[include][orders]]=customer&filter[where][age]=21";
    return this.http.get<any>(url,)

  }
}
export class ArticuloDetalle{
  autor:string;
  fecha:string;
  pdf:string;
  abstract:string
}
