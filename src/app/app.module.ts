import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import {RootController} from "./controller/root";
import { NotFoundComponent } from './controller/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RootController
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
