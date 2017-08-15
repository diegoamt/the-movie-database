import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HeaderComponent } from './header/header.component';
import { ActorsComponent } from './actors/actors.component';
import {ActorsService} from './actors/actors.service';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActorsComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ActorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
