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
  resumen= "";

  constructor(protected modalService: ModalService) {


  }
  ngOnInit(): void {

  }

  modalidachi(id:string,titulo:any,resumen:any){
    this.titulo=titulo
    this.resumen=resumen
    console.log(this.titulo,this.resumen)
    this.modalService.open(id)
  }

}
