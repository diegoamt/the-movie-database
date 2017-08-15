import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RoutingModule} from './routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ActorsComponent} from './actors/actors.component';
import {MoviesComponent} from './movies/movies.component';
import {ActorDetailComponent} from './actor-detail/actor-detail.component';

import {ActorsService} from './actors/actors.service';
import {MoviesService} from './movies/movies.service';
import {ActorDetailService} from './actor-detail/actor-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActorsComponent,
    MoviesComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    ActorsService, MoviesService, ActorDetailService],
  bootstrap: [AppComponent]
})

export class AppModule {}
