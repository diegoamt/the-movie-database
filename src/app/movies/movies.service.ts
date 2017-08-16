import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesService {
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1';
  private searchcUrl = 'https://api.themoviedb.org/3/search/movie?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1&query=';

  constructor(private http: Http) {}

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

  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1')
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1')
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  getUpcoming() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1')
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  getNowPlaying() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1')
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(this.searchcUrl + query)
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }
}
