import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})


export class ModalEditComponent {


  @Input() content: any;


  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content)

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  abrir(data: any) {
    console.log(data)
    open(data)
  }


}





// <ng-template #content let-modal>
// <div class="modal-header">
//   <h4 class="modal-title" id="modal-basic-title">Profile update</h4><!--titulo modal -->
//   <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button> <!--cruz cerrar -->
// </div>



// <div class="modal-body">
// <form #myForm="ngForm" >
//   <div class="mb-3">
//     <label for="editor">Editar cuadro texto</label> <!-- Titulo campo edicion -->

//       <div class="input-group">
//         <textarea  cols="40" rows="5" id="editor"
//         class="form-control"
//         placeholder="VARIABLE"
//         name="editor"
//         #username="ngModel" ngModel></textarea>
//       </div>
//   </div>
// </form>
// </div>


// <div class="modal-footer"> <!-- Footer Modal -->
// <button type="button" class="btn btn-outline-dark" (click)="modal.close()">Save</button>
// </div>
// </ng-template>




