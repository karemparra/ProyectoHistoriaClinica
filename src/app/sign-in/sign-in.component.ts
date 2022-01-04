import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  value1: string = "hola";
  EPverificarUsuario: string = environment.url + '/usuario/verificarUsuario';
  user: string | undefined;
  routeLink: string | undefined;

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  formUser = new FormGroup({
    id: new FormControl('1088035490', Validators.required),
    password: new FormControl('karemparra', Validators.required)
  })

  verificarUsuario(){
    console.log(this.formUser.value)//borrar
    this.http.get<any>(this.EPverificarUsuario, {params: {cedula: this.formUser.value.id, contraseña: this.formUser.value.password}}).subscribe(data => {
      console.log(data); //borrar
      this.user = data;
      console.log(typeof(this.user)); //borrar
      if(this.user){
        this.router.navigate(['/inicio']);
        localStorage.setItem("user", JSON.stringify(this.user))
      }
    });
    console.log("hola");
  }

}


