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
    return 'https://image.tmdb.org/t/p/w500' + path;
  }

}
