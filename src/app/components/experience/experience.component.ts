import { Component, OnInit } from '@angular/core';
import { Card } from '../../interface/i_xp-card.metadata';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  public cards: Card[] = [
    {
      avatar: 'assets/Images/cafe code.jpg',
      titulo: "TITULO 12",
      descripcion: "WASD 12",
    },
    {
      avatar: 'assets/Images/cafe code.jpg',
      titulo: "TITULO 13",
      descripcion: "WASD 13",
    },
    {
      avatar: 'assets/Images/cafe code.jpg',
      titulo: "TITULO 14",
      descripcion: "WASD 14",
    },
    {
      avatar: 'assets/Images/cafe code.jpg',
      titulo: "TITULO 15",
      descripcion: "WASD 15",
    },
  ]

  cartas = [
    {
      avatar: 'assets/Images/cafe code.jpg',
      titulo: "TITULO 12",
      descripcion: "WASD 12",
    },
    {
      avatar: 'assets/Images/cafe code.jpg',
      titulo: "TITULO 13",
      descripcion: "WASD 13",
    },
    {
      avatar: 'assets/Images/cafe code.jpg',
      titulo: "TITULO 14",
      descripcion: "WASD 14",
    },
    {
      avatar: 'assets/Images/cafe code.jpg',
      titulo: "TITULO 15",
      descripcion: "WASD 15",
    },
  ]



  constructor() {



  }

  ngOnInit(): void {
  }

}
