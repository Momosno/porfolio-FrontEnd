import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList: any;


  constructor(private datosPortfolio: PortfolioService) {



  }

  ngOnInit(): void { //apenas inicio el componente
    this.datosPortfolio.obtenerDatos().subscribe(data => {

      this.experienceList = data.experiencia;

    });
    //INTERPOLACION - SUSITUIR UNA EXPRESION POR UN VALOR STRING EN LA VISTA HTML
  }

}
