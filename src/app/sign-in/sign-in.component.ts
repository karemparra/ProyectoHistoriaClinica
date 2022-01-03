import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  value1: string = "hola";
  url: string = 'http://localhost:8080/usuario/obtenerPorCedula';
  userFound: string | undefined;
  routeLink: string | undefined;

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log('hola')
  }

  formUser = new FormGroup({
    id: new FormControl('1088035490', Validators.required),
    password: new FormControl('karemparra', Validators.required)
  })

  onSubmit(){
    console.log(this.formUser.value)
    this.http.get<any>(this.url, {params: {cedula: this.formUser.value.id}} ).subscribe(data => {
      console.log(data);
      this.userFound = data;
      if(this.userFound){this.router.navigate(['/'])}});
    
  }

}


