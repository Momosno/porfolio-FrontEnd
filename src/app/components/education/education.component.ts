import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interface/i_xp-card.metadata';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public cards: Card[] = [
    {
      avatar: 'assets/Images/code-is-poetry (1).jpg',
      titulo: "TITULO 12",
      descripcion: "WASD 12",
    },
    {
      avatar: 'assets/Images/code-is-poetry (1).jpg',
      titulo: "TITULO 13",
      descripcion: "WASD 13",
    },
    {
      avatar: 'assets/Images/code-is-poetry (1).jpg',
      titulo: "TITULO 14",
      descripcion: "WASD 14",
    },
    {
      avatar: 'assets/Images/code-is-poetry (1).jpg',
      titulo: "TITULO 15",
      descripcion: "WASD 15",
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
