import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActorsService } from './actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

export class ActorsComponent implements OnInit {
  actors: Observable<any>;
  constructor(private actorsService: ActorsService) {}

  ngOnInit() {
    this.actors = this.actorsService.getActors();
  }

  getImagePath(path: string): string {
    if (typeof path === 'undefined' || path === null) {
      return '../../assets/img/no-img.jpg';
    } else {
      return 'https://image.tmdb.org/t/p/w500' + path;
    }
  }

  searchActors($event) {
    const query = $event.target.value;
    if (query !== '') {
      this.actors = this.actorsService.searchActors(query);
    } else {
      this.actors = this.actorsService.getActors();
    }
  }
}
