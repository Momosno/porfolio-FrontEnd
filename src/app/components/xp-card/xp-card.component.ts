import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../interface/i_xp-card.metadata';

@Component({
  selector: 'app-xp-card',
  templateUrl: './xp-card.component.html',
  styleUrls: ['../xp-card/xp-card.component.css']
})

export class XpCardComponent implements OnInit {


  @Input() data: Card;

  constructor() {


  }
  ngOnInit(): void {
  }

}
