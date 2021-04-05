import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of, throwError } from 'rxjs';
import { MovieCardType } from 'src/app/enums/MovieCardType.enum';
import { Movie } from 'src/app/models/Movie.class';
import { MoviesService } from 'src/app/providers/movies.service';
import { environment } from 'src/environments/environment';

import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let moviesService: jasmine.SpyObj<MoviesService>;
  let testData: Movie[];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      providers: [
        { provide: MoviesService, useFactory: () => spyOnClass(MoviesService) }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    testData = [{ id: 1, imdbID: 'testid1', year: 2020, poster: 'https://picture.jpg', title: 'Movie Title', type: 'movie' }];
    moviesService = TestBed.inject(MoviesService) as jasmine.SpyObj<MoviesService>;
  })

  it('should create component', () => {
    moviesService.findAll.and.returnValue(of(testData))
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render movies list', () => {
    moviesService.findAll.and.returnValue(of(testData))
    fixture.detectChanges();
    const nativeElement: HTMLElement = fixture.nativeElement;
    const movies = nativeElement.querySelectorAll('[data-test="movie"]');
    expect(movies.length).toBe(1);
  });

  it('should set error variable to object if there is an error', () => {

    const errorResponse = new HttpErrorResponse({
      error: 'Internal server error',
      status: 500, statusText: 'Internal server error'
    });

    const displayError = spyOn(component, "displayErrorAlert");


    moviesService.findAll.and.returnValue(throwError(errorResponse))

    fixture.detectChanges();

    expect(component.error).not.toBeNull();
  });

  it('should call displayError message on error', () => {

    const errorResponse = new HttpErrorResponse({
      error: 'Internal server error',
      status: 500, statusText: 'Internal server error',
      url: `${environment.API}/movies`
    });
    const displayError = spyOn(component, "displayErrorAlert");

    moviesService.findAll.and.returnValue(throwError(errorResponse))
    fixture.detectChanges();
    expect(displayError).toHaveBeenCalled();
  });

  it('shoul call onDataDisplay method to chage the list layout (on)', () => {
    moviesService.findAll.and.returnValue(of(testData))
    component.handleOnDataDisplay('on');
    fixture.detectChanges()
    expect(component.type).toBe(MovieCardType.CARD);
  })

  it('shoul call onDataDisplay method to chage the list layout (off)', () => {
    moviesService.findAll.and.returnValue(of(testData))
    component.handleOnDataDisplay('off');
    fixture.detectChanges()
    expect(component.type).toBe(MovieCardType.LIST);
  })
});
