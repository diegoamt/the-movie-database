import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActorDetailService} from './actor-detail.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})

export class ActorDetailComponent implements OnInit {
  actor: any = {};

  constructor(private route: ActivatedRoute, private actorDetailService: ActorDetailService) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.actor = this.actorDetailService.getActor(id).subscribe(response => {
        this.actor = response;
      });
    });
  }

  getImagePath(path: string): string {
    return 'https://image.tmdb.org/t/p/w500' + path;
  }

}
