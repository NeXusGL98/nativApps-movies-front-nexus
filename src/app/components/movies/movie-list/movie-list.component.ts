import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MoviesService } from 'src/app/providers/movies.service';
import { catchError } from 'rxjs/operators'
import { Movie } from 'src/app/models/Movie.class';
import { MovieCardType } from 'src/app/enums/MovieCardType.enum';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public $movies: Observable<Movie[]>;
  public error: any;
  public type = MovieCardType.CARD;
  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.error = null;
    this.$movies = this._moviesService.findAll().pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('THERE WAS AN ERROR IN HERE')
        this.error = error;
        this.displayErrorAlert();
        return throwError(error);
      })
    );
  }

  handleOnDataDisplay(event: string) {
    if (event === 'on') {
      this.type = MovieCardType.CARD
    } else {
      this.type = MovieCardType.LIST
    }
  }



  displayErrorAlert() {
    Swal.fire({
      title: 'Error al obtener listado. Intente nuevamente',
      confirmButtonText: 'Aceptar',
      icon: 'error'
    });
  }

}
