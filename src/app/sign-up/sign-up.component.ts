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

  value3: any;
  valueIconLeft: string| undefined;
  EPregistrarUsuario: string = environment.url + '/usuario/crearUsuario';
  user: string | undefined;
  bodyRequest: any;
  display: boolean = false;
  headerDialog!: string;
  contentDialog!: string;

  formNewUser = new FormGroup({
    cedula: new FormControl('1088035775', [Validators.required, Validators.maxLength(10)]),
    nombre: new FormControl('Héctor', Validators.required),
    apellido: new FormControl('Cardona', Validators.required),
    email: new FormControl('hector@gmail.com', [Validators.required, Validators.email]),
    telefono: new FormControl('3104690994', [Validators.required, Validators.maxLength(10)]),
    direccion: new FormControl('CentralPark', Validators.required),
    fechaNacimiento: new FormControl('1998-11-08', Validators.required),
    especialidad: new FormControl('Cirugía', Validators.required),
    contraseña: new FormControl('hectorcardona', Validators.required),
    validContraseña: new FormControl('hectorcardona', Validators.required)
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
                          contraseña: this.formNewUser.value.contraseña}
      console.log(this.bodyRequest)
      console.log(this.formNewUser.value)//borrar
      this.http.post<any>(this.EPregistrarUsuario,this.bodyRequest).subscribe(data => {
        console.log(data); //borrar
        this.user = data;
        console.log(typeof(this.user)); //borrar
        this.headerDialog = "Registro completado";
        this.contentDialog = "Te vamos a redirigir a la página inicial";
        this.showDialog();
        // if(this.user){
        //   this.router.navigate(['/inicio']);
        //   localStorage.setItem("user", JSON.stringify(this.user))
        // }
      });
    } else {
      this.headerDialog = "Oh no...";
      this.contentDialog = "La contraseña que ingresaste y su verificación no concuerdan, revísalas y vuelve a intentarlo";
      this.showDialog();
    }
  }
  
  showDialog() {
    this.display = true;
  }
  

}
