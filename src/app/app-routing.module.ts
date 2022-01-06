import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarDatosMedicoComponent } from './actualizar-datos-medico/actualizar-datos-medico.component';
import { InicioComponent } from './inicio/inicio.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path: '', redirectTo: "/signIn", pathMatch: "full"},
  {path: 'signIn', component: SignInComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'actualizarDatosMedico', component: ActualizarDatosMedicoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
