import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/interface/proyect';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  public proyectos: Proyect[] = [
    {
      titulo: "Proyecto FLLSTACK",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit, magni sint iusto ratione reiciendis exercitationem alias asperiores atque quisquam, quae nulla libero voluptatum dicta maiores nihil. Illum, ipsum quasi!",
      imagenes: "assets/Images/unknown.png",
      //imagenes: ["assets/Images/unknown.png", "assets/Images/unknown.png"],
    },
    {
      titulo: "Proyecto Python",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit, magni sint iusto ratione reiciendis exercitationem alias asperiores atque quisquam, quae nulla libero voluptatum dicta maiores nihil. Illum, ipsum quasi!",
      imagenes: "assets/Images/unknown.png",
      //imagenes: ["assets/Images/unknown.png", "assets/Images/unknown.png"],
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
