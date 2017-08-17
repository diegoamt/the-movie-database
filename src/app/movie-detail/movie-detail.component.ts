import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieDetailService} from './movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {
  movie: any = {};

  constructor(private route: ActivatedRoute, private movieDetailService: MovieDetailService) {}

  /**
   * Initialize component and movie information
   */
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.movie = this.movieDetailService.getMovie(id).subscribe(response => {
        this.movie = response;
      });
    });
  }

  /**
   * Get full path of movie image
   * @param {string} path
   * @returns {string}
   */
  getImagePath(path: string): string {
    if (typeof path === 'undefined' || path === null) {
      return 'assets/img/no-img.jpg';
    } else {
      return 'https://image.tmdb.org/t/p/w500' + path;
    }
  }
}
