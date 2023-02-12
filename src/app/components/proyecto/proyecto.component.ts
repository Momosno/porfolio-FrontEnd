import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {


  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
