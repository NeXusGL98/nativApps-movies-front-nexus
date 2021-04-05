import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../components/movies/movie-list/movie-list.component';
import { MovieCardComponent } from '../components/movies/movie-card/movie-card.component';
import { SharedComponentsModule } from '../components/shared/shared-components.module';
import { MovieTypePipe } from '../pipes/movie-type.pipe';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    PagesComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieTypePipe
  ]
})
export class PagesModule { }
