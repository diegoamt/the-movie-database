import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActorDetailService} from './actor-detail.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})

export class ActorDetailComponent implements OnInit {
  actor: any;
  cast_movies: Observable<any>;
  crew_movies: Observable<any>;

  constructor(private route: ActivatedRoute, private actorDetailService: ActorDetailService) {}

  /**
   * Initialize component with actor information and your movies
   */
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.actor = this.actorDetailService.getActor(id).subscribe(response => {
        this.actor = response;
      });
      this.cast_movies = this.actorDetailService.getCastMovies(id);
      this.crew_movies = this.actorDetailService.getCrewMovies(id);
    });
  }

  /**
   * Get full path of image from TMDB API
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

  /**
   * Given the gender id, return Male or Female
   * @param {number} gender
   * @returns {string}
   */
  getGenderString(gender: number): string {
    if (gender === 1) {
      return 'Female';
    } else {
      return 'Male';
    }
  }
}
