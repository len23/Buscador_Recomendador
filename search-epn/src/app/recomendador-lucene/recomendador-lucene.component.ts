import { Component, OnInit } from '@angular/core';
import { SearchService, ArticuloDetalle } from '../search.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-recomendador-lucene',
  templateUrl: './recomendador-lucene.component.html',
  styleUrls: ['./recomendador-lucene.component.css']
})
export class RecomendadorLuceneComponent implements OnInit {

  constructor(private searhService:SearchService, private modalService: NgbModal) { }

  ngOnInit() {
    this.artDetail={
      autor:'',
      fecha:'',
       pdf:'',
      abstract:''
    }
    this.searhService.getUrl().subscribe(
      param => console.log('Decueltos: ',param)
    );
  }

  txtInput:string='';
  arrayResults:any[]=[];
  closeResult: string;
  artDetail:ArticuloDetalle={
    autor:'',
    fecha:'',
     pdf:'',
    abstract:''
  };
  prefixsIEEE='PREFIX id: <http://ieee.rkbexplorer.com/id/>'+
  'PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>'+
  'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>'+
  'PREFIX akt:  <http://www.aktors.org/ontology/portal#>'+
  'PREFIX owl:  <http://www.w3.org/2002/07/owl#>'+
  'PREFIX akt:  <http://www.aktors.org/ontology/portal#>'+
  'PREFIX akts: <http://www.aktors.org/ontology/support#>'+
  'PREFIX iai:  <http://www.iai.uni-sb.de/resist#>'+
  'PREFIX extn: <http://www.aktors.org/ontology/extension#>';
  seleccionado:string='';


  searchArticles(){
    this.searhService.getResultados(this.txtInput).subscribe(
      results => {
        this.arrayResults=[];
        results.forEach(element => {
          this.arrayResults.push(element.tituloArticulo)
        });
      }
    );
  }

  openLg(content,titulo) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.getDetails(titulo);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getDetails(titulo:string){
    console.log('titulo: ', titulo);
    /* let sparql = 'SELECT ?uri ?nombre ?abstracto ?fecha ?pdf ' +
    'WHERE { ?uri akt:has-title' + `"${titulo}"` + '.' +             
            '?uri akt:has-author ?autor.'+
            '?autor   akt:full-name ?nombre.'+           
            '?uri extn:has-abstract ?abstracto.'+           
            '?uri  akt:has-date ?fechaUri.'+
            '?fechaUri   akts:has-pretty-name ?fecha.'+           
             '?uri  akt:has-web-address ?pdf'+
              '}LIMIT 1'; */

    let sparql = 'SELECT ?uri ?nombre ?abstracto ?fecha ?pdf ' +
    'WHERE {?uri akt:has-title' + `"${titulo}"` + '.' +             
            '?uri akt:has-author ?autor.'+
            '?autor   akt:full-name ?nombre.'+    

            '  OPTIONAL{ ?uri extn:has-abstract ?abstracto.'+
            '  ?uri  akt:has-date ?fechaUri.'+
             ' ?fechaUri   akts:has-pretty-name ?fecha.'+
             ' ?uri  akt:has-web-address ?pdf}'    +
              '}LIMIT 1';
    let todoSparql = this.prefixsIEEE + sparql; 
    this.searhService.getDetalleArticulo(todoSparql).subscribe(
      detalles => {
        this.artDetail={
          autor:'',
          fecha:'',
           pdf:'',
          abstract:''
        }
        
          this.artDetail.autor=detalles.results.bindings[0].nombre.value;
          this.artDetail.fecha=detalles.results.bindings[0].fecha.value;
          this.artDetail.pdf = detalles.results.bindings[0].pdf.value;
          this.artDetail.abstract=detalles.results.bindings[0].abstracto.value;
        
  
      });
  };

}
