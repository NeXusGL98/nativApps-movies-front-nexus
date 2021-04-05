import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from '../models/Movie.class';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // Inject the http service and test controller for each test
    service = TestBed.inject(MoviesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return movies array', () => {
    const testData: Movie[] = [{ id: 1, imdbID: 'testid1', year: 2020, poster: 'https://picture.jpg', title: 'Movie Title', type: 'movie' }];

    // Make an HTTP GET request
    httpClient.get<Movie[]>(`${environment.API}/movies`)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(`${environment.API}/movies`);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

  })

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.get<Movie[]>(`${environment.API}/movies`).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(`${environment.API}/movies`);

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });

});
