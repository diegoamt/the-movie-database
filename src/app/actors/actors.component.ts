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

  /**
   * Initialize component and get actors from TMDB API
   */
  ngOnInit() {
    this.actors = this.actorsService.getActors();
  }

  /**
   * Get full path of actor image
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
   * Search actor by your name
   * @param $event
   */
  searchActors($event) {
    const query = $event.target.value;
    if (query !== '') {
      this.actors = this.actorsService.searchActors(query);
    } else {
      this.actors = this.actorsService.getActors();
    }
  }
}
