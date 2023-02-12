import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-xp-card',
  templateUrl: './xp-card.component.html',
  styleUrls: ['../xp-card/xp-card.component.css']
})

export class XpCardComponent implements OnInit {


  @Input() item: any;

  constructor() {


  }
  ngOnInit(): void {
    console.log(this.item)
  }

}
