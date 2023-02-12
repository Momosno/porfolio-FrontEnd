import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacionList: any;


  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void { //apenas inicio el componente
    this.datosPortfolio.obtenerDatos().subscribe(data => {

      this.educacionList = data.educacion;
      //console.log(this.educacionList); //LLEGA

    });
    //INTERPOLACION - SUSITUIR UNA EXPRESION POR UN VALOR STRING EN LA VISTA HTML
  }

}
