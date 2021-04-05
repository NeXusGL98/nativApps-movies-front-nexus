import { Component, Input, OnInit } from '@angular/core';
import { MovieCardType } from 'src/app/enums/MovieCardType.enum';
import { Movie } from 'src/app/models/Movie.class';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') movie: Movie
  @Input('type') type: MovieCardType = MovieCardType.CARD
  mouseEntered: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
