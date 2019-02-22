 import { Component, OnInit } from '@angular/core';
 import {SearchService} from "../search.service";
 import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private searhService:SearchService, private modalService: NgbModal) { }
  base_url = this.searhService.base_url

  ngOnInit() {
  }

}
