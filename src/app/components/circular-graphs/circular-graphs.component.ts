import { Component, OnInit, Input } from '@angular/core';
import { CircleValues } from 'src/app/interface/circular-graphs.metadata';


@Component({
  selector: 'app-circular-graphs',
  templateUrl: './circular-graphs.component.html',
  styleUrls: ['./circular-graphs.component.css']
})
export class CircularGraphsComponent implements OnInit {

  @Input() data: CircleValues;

  constructor() { }

  ngOnInit(): void {
  }

}
