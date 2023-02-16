import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /*DECLARO VARIABLES*/
  miPortfolio: any;
  content: any;
  bodyText = "";

  constructor(private datosPortfolio: PortfolioService, protected modalService: ModalService) { }
  //private datosPortfolio: PortfolioService) --> injecta datos en el componente desde ese servicio y se los puede usar

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      //console.log(data); 
      this.miPortfolio = data  //INTERPOLACION - SUSITUIR UNA EXPRESION POR UN VALOR STRING EN LA VISTA HTML
    });

  }

  modalidachi(id:string,data:any){
    this.bodyText=data
    this.modalService.open(id)
  }

  save_button(data:any){
    console.log(data)
    this.modalService.close()
  }




}




