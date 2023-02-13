import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild(ModalEditComponent, { static: true }) child: ModalEditComponent;

  /*DECLARO VARIABLES*/
  miPortfolio: any;
  content: any;

  constructor(private datosPortfolio: PortfolioService) { }
  //private datosPortfolio: PortfolioService) --> injecta datos en el componente desde ese servicio y se los puede usar

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      //console.log(data); 
      this.miPortfolio = data  //INTERPOLACION - SUSITUIR UNA EXPRESION POR UN VALOR STRING EN LA VISTA HTML
    });

  }






  public editar(data: any): void {
    console.log(data);

  }

  callChild(content: any) {
    this.child.abrir(content);
  }



}




