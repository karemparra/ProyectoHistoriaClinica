import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: any = JSON.parse(localStorage.getItem("user") || ""); 
  cedulaPaciente = new FormControl('');
  EPbuscarPaciente: string = environment.url + "/paciente/buscarPaciente"; 
  EPeliminarPaciente: string = environment.url + "/paciente/eliminarPaciente";
  pacienteEncontrado: boolean = true;
  primeraVez: boolean = true;
  pacienteF: any = {
    "cedula": "",
    "nombre": "",
    "apellido": "",
    "email": "",
    "telefono": "",
    "direccion": "",
    "fechaNacimiento": "",
    "enfermedades": "",
    "tipoSangre": "",
    "eps": ""
  };
  pacienteAct: any = this.pacienteF;
  pacienteEdad!: string;
  añoNacimiento!: any;
  diaAct!: any
  headerDialog: string = "Paciente eliminado"
  contentDialog: string = "El paciente" + this.pacienteAct.nombre + " " + this.pacienteAct.apellido + " ha sido eliminado satisfactoriamente";
  display: boolean = false;
  requestBody! : string;

  constructor(private http:HttpClient, private router: Router){}

  ngOnInit(): void {
  }
  
  buscarPaciente(){
    this.primeraVez = false
    this.http.get<any>(this.EPbuscarPaciente, {params: {cedula: this.cedulaPaciente.value}}).subscribe(data => {
      if (data != null){
        this.pacienteAct = data;
        this.pacienteEncontrado = false;
        this.pacienteEdad = this.calcularEdadPaciente().toString();
        
      } else {
        this.pacienteEncontrado = true;
        this.pacienteAct = this.pacienteF;
      }
    })
  }

  calcularEdadPaciente():number{
    this.añoNacimiento = parseInt(this.pacienteAct.fechaNacimiento.substring(0,4));
    this.diaAct = new Date();
    return parseInt(this.diaAct.getFullYear()) - this.añoNacimiento;
  }

  eliminarPaciente(){
    this.requestBody = JSON.stringify(this.pacienteAct)
    this.http.delete(this.EPeliminarPaciente, {body: this.pacienteAct}).subscribe(data => {
      if(data != null){
        this.primeraVez = true;
        this.display = true;
      }
    })
  }

}
