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

  getImagePath(path: string): string {
    if (typeof path === 'undefined' || path === null) {
      return '../../assets/img/no-img.jpg';
    } else {
      return 'https://image.tmdb.org/t/p/w500' + path;
    }
  }

  getGenderString(gender: number): string {
    if (gender === 1) {
      return 'Female';
    } else {
      return 'Male';
    }
  }

}
