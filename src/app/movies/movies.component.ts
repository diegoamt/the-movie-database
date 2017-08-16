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
  current = 'Popular';

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

  getImagePath(path: string): string {
    if (typeof path === 'undefined' || path === null) {
      return '../../assets/img/no-img.jpg';
    } else {
      return 'https://image.tmdb.org/t/p/w500' + path;
    }
  }

  searchMovies($event) {
    const query = $event.target.value;
    if (query !== '') {
      this.movies = this.moviesService.searchMovies($event.target.value);
    } else {
      this.movies = this.moviesService.getMovies();
    }
  }

  getPopular() {
    this.movies = this.moviesService.getPopular();
    this.current = 'Popular';
  }

  getTopRated() {
    this.movies = this.moviesService.getTopRated();
    this.current = 'Top rated';
  }

  getNoePlaying() {
    this.movies = this.moviesService.getNowPlaying();
    this.current = 'Now playing';
  }

  getUpcoming() {
    this.movies = this.moviesService.getUpcoming();
    this.current = 'Upcoming';
  }
}
