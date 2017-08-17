import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ActorsService {
  private url = 'https://api.themoviedb.org/3/person/popular?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1';
  private searchcUrl = 'https://api.themoviedb.org/3/search/person?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1&query=';

  constructor(private http: Http) {}

  /**
   * Get actors from TMDB API
   * @returns {Observable<any>}
   */
  getActors(): Observable<any> {
    return this.http.get(this.url)
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  /**
   * Search actor by your name
   * @param {string} query
   * @returns {Observable<any>}
   */
  searchActors(query: string): Observable<any> {
    return this.http.get(this.searchcUrl + query)
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
