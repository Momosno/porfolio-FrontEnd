import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /*DECLARO VARIABLES*/
  miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService) { }
  //private datosPortfolio: PortfolioService) --> injecta datos
  //en el componente desde ese servicio y se los puede usar

  ngOnInit(): void { //apenas inicio el componente
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      //console.log(data); 
      this.miPortfolio = data
    });
    //INTERPOLACION - SUSITUIR UNA EXPRESION POR UN VALOR STRING EN LA VISTA HTML
  }
}




