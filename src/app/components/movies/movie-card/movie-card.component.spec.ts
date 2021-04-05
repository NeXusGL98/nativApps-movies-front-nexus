import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/models/Movie.class';
import { MovieTypePipe } from 'src/app/pipes/movie-type.pipe';

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  const movie: Movie = { id: 1, type: 'movie', title: 'New Movie', poster: 'test.jpg', year: 2020, imdbID: 'testid' }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent, MovieTypePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = movie;
    component.type = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create component with proper movie', () => {
    expect(component.movie).toEqual(movie);
  });

  it('should create component with proper movies attributes', () => {
    expect(component.movie.title).not.toBe("test Title");
    expect(component.movie.year).not.toBe(2019);
    expect(component.movie.poster).not.toBe("http://testimage.jpg");
    expect(component.movie.id).not.toBe(10);
    expect(component.movie.imdbID).not.toBe("imdbtest10");
  });
});
