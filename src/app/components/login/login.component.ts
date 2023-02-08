import { Component, OnInit } from '@angular/core';
import { Loginservice } from 'src/app/services/login.service';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: Loginservice) { }

  ngOnInit(): void {
    this.loginservice.add("prueba");
  }

  submit(myForm: NgForm): void {
    console.log("Form submited");
    console.log(myForm.value);


  }




}
