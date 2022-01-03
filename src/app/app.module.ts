import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { InicioComponent } from './inicio/inicio.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DividerModule} from 'primeng/divider';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ScrollPanelModule,
    DividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
