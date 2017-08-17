import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieDetailService {
  private url = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: Http) { }

  /**
   * Get movie information from TMDB API
   * @param {number} id
   * @returns {Observable<any>}
   */
  getMovie(id: number): Observable<any> {
    const url = this.url + id + '?api_key=d1ccda07fd874dc9393ac5829e89c12e';
    return this.http.get(url)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
