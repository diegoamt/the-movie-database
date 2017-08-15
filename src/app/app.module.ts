import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActorsComponent } from './actors/actors.component';
import {ActorsService} from './actors/actors.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ActorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
