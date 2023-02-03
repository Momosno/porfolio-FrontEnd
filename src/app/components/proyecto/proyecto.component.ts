import { Component, Input, OnInit } from '@angular/core';
import { Proyect } from 'src/app/interface/proyect';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {


  @Input() datas: Proyect;

  constructor() { }

  ngOnInit(): void {
  }

}
