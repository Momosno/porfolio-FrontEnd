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


    
  html_template:string="<jw-modal id='modal-2'><h1>Edicion de campo</h1><p>Editar Titulo: <textarea style='width: 100%;' rows='2' type='text' [(ngModel)]='this.titulo'></textarea></p><hr><p>Editar Resumen: <textarea style='width: 100%;'' rows='8' type='text' [(ngModel)]='this.resumen'></textarea></p><button (click)='save_button('modal-2',this.titulo,this.resumen)'>HACER QUE SEA SAVE</button></jw-modal>"

  modalidachi(id:string,titulo:any,resumen:any){
    this.titulo=titulo
    this.resumen=resumen
    console.log(this.titulo,this.resumen)
    this.modalService.open(id)
  }

  
  save_button(id:string,titulo:any,resumen:any){
    console.log(id,titulo,resumen)
    this.modalService.close()
  }


}
