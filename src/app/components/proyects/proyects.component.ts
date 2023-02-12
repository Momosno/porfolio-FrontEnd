import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectosList: any;

  constructor(private datosPortfolio: PortfolioService) { }
  ngOnInit(): void { //apenas inicio el componente
    this.datosPortfolio.obtenerDatos().subscribe(data => {

      this.proyectosList = data.proyectos;

    });
    //INTERPOLACION - SUSITUIR UNA EXPRESION POR UN VALOR STRING EN LA VISTA HTML
  }

}
