import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ActorDetailService {
  private url = 'https://api.themoviedb.org/3/person/';

  constructor(private http: Http) { }

  getActor(id: number): Observable<any> {
    const url = this.url + id + '?api_key=d1ccda07fd874dc9393ac5829e89c12e';
    return this.http.get(url)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getCastMovies(id: number): Observable<any> {
    const url = this.url + id + '/movie_credits?api_key=d1ccda07fd874dc9393ac5829e89c12e';
    return this.http.get(url)
      .map(response => {
        return response.json().cast;
      })
      .catch(this.handleError);
  }

  getCrewMovies(id: number): Observable<any> {
    const url = this.url + id + '/movie_credits?api_key=d1ccda07fd874dc9393ac5829e89c12e';
    return this.http.get(url)
      .map(response => {
        return response.json().crew;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
