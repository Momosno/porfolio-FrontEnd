import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-xp-card',
  templateUrl: './xp-card.component.html',
  styleUrls: ['../xp-card/xp-card.component.css']
})

export class XpCardComponent implements OnInit {



  @Input() item: any;
  
  titulo = "";
  parrafo="";

  constructor(protected modalService: ModalService) {


  }
  ngOnInit(): void {

  }

  modalidachi(id:string,titulo:any,parrafo:any){
    this.titulo=titulo
    this.parrafo=parrafo
    this.modalService.open(id)
  }

}
