import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoajService {

  constructor(private http:HttpClient) { }

  obtenerArticulosDoaj(txtIngresado:string):Observable<any>{
    const url='https://doaj.org/api/v1/search/articles/'+encodeURIComponent(txtIngresado);
    return this.http.get<any>(url);
  }
}
