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

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.movie = this.movieDetailService.getMovie(id).subscribe(response => {
        this.movie = response;
      });
    });
  }

  getImagePath(path: string): string {
    console.log(path);
    return 'https://image.tmdb.org/t/p/w500' + path;
  }
}
