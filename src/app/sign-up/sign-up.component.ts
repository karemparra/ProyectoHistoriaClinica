import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  EPregistrarUsuario: string = environment.url + '/usuario/crearUsuario';
  user: string | undefined;
  bodyRequest: any;
  display: boolean = false;
  headerDialog!: string;
  contentDialog!: string;

  formNewUser = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    direccion: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', Validators.required),
    especialidad: new FormControl('', Validators.required),
    contraseña: new FormControl('', Validators.required),
    validContraseña: new FormControl('', Validators.required)
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registrarUsuario(){
    if(this.formNewUser.value.contraseña == this.formNewUser.value.validContraseña){
      this.bodyRequest = {cedula: this.formNewUser.value.cedula,
                          nombre: this.formNewUser.value.nombre, 
                          apellido: this.formNewUser.value.apellido,
                          email: this.formNewUser.value.email,
                          telefono: this.formNewUser.value.telefono,
                          direccion: this.formNewUser.value.direccion,
                          fechaNacimiento: this.formNewUser.value.fechaNacimiento,
                          especialidad: this.formNewUser.value.especialidad,
                          contraseña: this.formNewUser.value.contraseña
                        }
      this.http.post<any>(this.EPregistrarUsuario,this.bodyRequest).subscribe(data => {
        this.user = data;
        this.headerDialog = "Registro completado";
        this.contentDialog = "Te vamos a redirigir a la página inicial";
        this.display = true;
      });
    } else {
      this.headerDialog = "Oh no... 😭";
      this.contentDialog = "La contraseña que ingresaste y su verificación no concuerdan, revísalas y vuelve a intentarlo";
      this.display = true;
    }
  }
  
  
  

}
