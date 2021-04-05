import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'
import { IMovieResponse } from '../interfaces/IMovieResponse';
import { Movie } from '../models/Movie.class';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }



  public findAll(): Observable<Movie[]> {
    return this._http.get<IMovieResponse>(`${environment.API}/movies`).pipe(
      map((response: IMovieResponse) => {
        return response.movies;
      })
    )
  }
}
