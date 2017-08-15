import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Observable<any>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

  getImagePath(path: string): string {
    return 'https://image.tmdb.org/t/p/w500' + path;
  }

}
