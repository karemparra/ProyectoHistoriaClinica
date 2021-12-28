import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  value1: string = "hola";

  ngOnInit(): void {
  }

  formUser = new FormGroup({
    id: new FormControl('1088035490', Validators.required),
    password: new FormControl('karemparra', Validators.required)
  })

}


