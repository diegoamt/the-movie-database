import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import {ActorDetailComponent} from './actor-detail/actor-detail.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'actors', component: ActorsComponent},
  {path: 'actors/actor-detail/:id', component: ActorDetailComponent},
  {path: 'movies/movie-detail/:id', component: MovieDetailComponent},
  {path: '', redirectTo: 'actors', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})

export class RoutingModule { }
