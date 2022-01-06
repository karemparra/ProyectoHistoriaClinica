import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-actualizar-datos-medico',
  templateUrl: './actualizar-datos-medico.component.html',
  styleUrls: ['./actualizar-datos-medico.component.css']
})
export class ActualizarDatosMedicoComponent implements OnInit {

  userAct: any = JSON.parse(localStorage.getItem("user") || "");
  EPregistrarUsuario: string = environment.url + '/usuario/actualizarUsuario';
  user: string | undefined;
  bodyRequest: any;
  display: boolean = false;
  headerDialog!: string;
  contentDialog!: string;
  disabled: boolean = true;

  formUpdateUser = new FormGroup({
    cedula: new FormControl(this.userAct.cedula),
    nombre: new FormControl(this.userAct.nombre, Validators.required),
    apellido: new FormControl(this.userAct.apellido, Validators.required),
    email: new FormControl(this.userAct.email, [Validators.required, Validators.email]),
    telefono: new FormControl(this.userAct.telefono, [Validators.required, Validators.maxLength(10)]),
    direccion: new FormControl(this.userAct.direccion, Validators.required),
    fechaNacimiento: new FormControl(this.userAct.fechaNacimiento.substring(0,10), Validators.required),
    especialidad: new FormControl(this.userAct.especialidad, Validators.required),
    contraseña: new FormControl(this.userAct.contraseña, Validators.required),
    validContraseña: new FormControl(this.userAct.contraseña, Validators.required)
  })


  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  actualizarUsuario(){
    if(this.formUpdateUser.value.contraseña == this.formUpdateUser.value.validContraseña){
      console.log('entre')
      this.bodyRequest = {cedula: this.formUpdateUser.value.cedula,
                          nombre: this.formUpdateUser.value.nombre, 
                          apellido: this.formUpdateUser.value.apellido,
                          email: this.formUpdateUser.value.email,
                          telefono: this.formUpdateUser.value.telefono,
                          direccion: this.formUpdateUser.value.direccion,
                          fechaNacimiento: this.formUpdateUser.value.fechaNacimiento,
                          especialidad: this.formUpdateUser.value.especialidad,
                          contraseña: this.formUpdateUser.value.contraseña
                        }
      console.log(this.bodyRequest)
      this.http.put<any>(this.EPregistrarUsuario,this.bodyRequest).subscribe(data => {
        this.user = data;
        this.headerDialog = "Actualización de datos completada";
        this.contentDialog = "Te vamos a redirigir a la página inicial";
        this.display = true;
        //this.route.navigate(['/inicio']);

      });
    } else {
      this.headerDialog = "Oh no... 😭";
      this.contentDialog = "La contraseña que ingresaste y su verificación no concuerdan, revísalas y vuelve a intentarlo";
      this.display = true;
    }
  }



}
