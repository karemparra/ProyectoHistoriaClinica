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
  
  EPverificarUsuario: string = environment.url + '/usuario/verificarUsuario';
  user: string | undefined;
  iconImage: string = "../../images/doctors2-min.jpg";

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  formUser = new FormGroup({
    id: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  verificarUsuario(){
    this.http.get<any>(this.EPverificarUsuario, {params: {cedula: this.formUser.value.id, contraseña: this.formUser.value.password}}).subscribe(data => {
      this.user = data;
      if(this.user){
        this.router.navigate(['/inicio']);
        localStorage.setItem("user", JSON.stringify(this.user))
      }
    });
  }

}


