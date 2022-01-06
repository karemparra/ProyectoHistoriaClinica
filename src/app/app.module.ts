import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { InicioComponent } from './inicio/inicio.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DividerModule} from 'primeng/divider';
import { SignUpComponent } from './sign-up/sign-up.component';
import {CalendarModule} from 'primeng/calendar';
import {PasswordModule} from 'primeng/password';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActualizarDatosMedicoComponent } from './actualizar-datos-medico/actualizar-datos-medico.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    InicioComponent,
    SignUpComponent,
    ActualizarDatosMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ScrollPanelModule,
    DividerModule,
    CalendarModule,
    FormsModule,
    PasswordModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
