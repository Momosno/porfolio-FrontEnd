import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /*DECLARO VARIABLES*/


  public parrafo: string;
  public nombre: string;
  public resumen: string;

  constructor() {
    /*LES DOY VALOR     */

    this.resumen = "TECNICO EN ELECTRONICA - PROGRAMADOR - FULLSTACK DEVELOPER JR"
    this.nombre = "D'AGOSTINO ULISES"
    this.parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus sed, incidunt, enim voluptatem a nesciunt fuga aut dolorem quos nostrum quaerat! Exercitationem voluptate quos placeat perspiciatis, officiis ratione. Adipisci minus, molestiae sint optio quis, doloribus eligendi earum quia nisi sit ex. Accusamus consequatur animi quo quasi neque, iste dignissimos."




  }

  ngOnInit(): void {
  }

}
