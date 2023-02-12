import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsList: any;
  lenguajesList: any;
  idiomsList: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void { //apenas inicio el componente
    this.datosPortfolio.obtenerDatos().subscribe(data => {

      this.skillsList = data.skills;
      this.idiomsList = data.idioms;
      this.lenguajesList = data.lenguajes;
      //console.log(this.educacionList); //LLEGA

    });
    //INTERPOLACION - SUSITUIR UNA EXPRESION POR UN VALOR STRING EN LA VISTA HTML
  }

}
