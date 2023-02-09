import { Component, OnInit } from '@angular/core';
import { Loginservice } from 'src/app/services/login.service';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginservice: Loginservice) { }

  submit(myForm: NgForm): void {
    console.log(myForm.value);
    console.log(myForm.value.usuario);
    console.log(myForm.value.password);

    //Validacion


  }
  // [(ngModel)]="lado"



}
