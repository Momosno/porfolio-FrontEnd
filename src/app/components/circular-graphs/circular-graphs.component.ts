import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-circular-graphs',
  templateUrl: './circular-graphs.component.html',
  styleUrls: ['./circular-graphs.component.css']
})
export class CircularGraphsComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
