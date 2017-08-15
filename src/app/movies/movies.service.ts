import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesService {
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1';

  constructor(private http: Http) { }

  getMovies(): Observable<any> {
    return this.http.get(this.url)
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
