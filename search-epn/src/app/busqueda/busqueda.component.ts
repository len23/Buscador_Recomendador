import { Component, OnInit } from '@angular/core';
import { DoajService } from '../doaj.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  txtIngresado:'';
  resultadosDoajArray:any[]=[];

  constructor(private doajService:DoajService) { }

  ngOnInit() {
  }


  
  buscarDoaj(txt:string){
    this.doajService.obtenerArticulosDoaj(txt).subscribe(
      param => {
        console.log('Params: ', param);
        this.resultadosDoajArray=param.results;
      }
    );
  }
}
