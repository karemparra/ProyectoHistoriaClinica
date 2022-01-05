import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: any = JSON.parse(localStorage.getItem("user") || ""); 
  // userNombre: string = JSON.parse(this.user).nombre;
  // userApellido: string = JSON.parse(this.user).apellido;

  constructor() {
    console.log(this.user.nombre)}

  ngOnInit(): void {
  }
  

}
