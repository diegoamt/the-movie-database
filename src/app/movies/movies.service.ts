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

  /**
   * Get movies from TMDB API
   * @returns {Observable<any>}
   */
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

  /**
   * Get popular movies from TMDB API
   * @returns {Observable<any | any>}
   */
  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1')
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  /**
   * Get top rated movies from TMDB API
   * @returns {Observable<any | any>}
   */
  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1')
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  /**
   * Get upcoming movies from TMDB API
   * @returns {Observable<any | any>}
   */
  getUpcoming() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1')
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  /**
   * Get now playing movies from TMDB API
   * @returns {Observable<any | any>}
   */
  getNowPlaying() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1')
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }

  /**
   * Search movies by title
   * @param {string} query
   * @returns {Observable<any>}
   */
  searchMovies(query: string): Observable<any> {
    return this.http.get(this.searchcUrl + query)
      .map(response => {
        return response.json().results;
      })
      .catch(this.handleError);
  }
}
