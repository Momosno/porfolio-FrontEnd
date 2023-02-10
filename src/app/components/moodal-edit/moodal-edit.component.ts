import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-moodal-edit',
  templateUrl: './moodal-edit.component.html',
  styleUrls: ['./moodal-edit.component.css']
})
export class MoodalEditComponent {

  constructor(public modalRef: NgbModalRef) { }


}
