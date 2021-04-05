import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movies/movie-card/movie-card.component';
import { MovieListComponent } from '../movies/movie-list/movie-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarViewComponent } from './toolbar-view/toolbar-view.component';




@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NavbarComponent,
    PageHeaderComponent,
    SpinnerComponent,
    ToolbarViewComponent
  ],
  exports:[
    NavbarComponent,
    PageHeaderComponent,
    SpinnerComponent,
    ToolbarViewComponent
  ]
})
export class SharedComponentsModule { }
