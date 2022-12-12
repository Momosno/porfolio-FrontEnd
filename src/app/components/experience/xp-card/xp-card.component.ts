import { Component, OnInit, Input } from '@angular/core';
import { XpCard } from './i_xp-card.metadata';

@Component({
  selector: 'app-xp-card',
  templateUrl: './xp-card.component.html',
  styleUrls: ['./xp-card.component.css']
})

export class XpCardComponent implements OnInit {


  @Input() data: XpCard;

  constructor() {


  }

  ngOnInit(): void {
  }

}
