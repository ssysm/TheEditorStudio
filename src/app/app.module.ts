import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {RootController} from './controller/root';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './partical/not-found/not-found.component';
import { NavbarComponent } from './partical/navbar/navbar.component';
import { FooterComponent } from './partical/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent
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
