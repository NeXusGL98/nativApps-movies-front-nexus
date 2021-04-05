import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  {
    path: 'app',
    component: PagesComponent,
    loadChildren: () => import('./children-routes.module').then(m => m.ChildrenRoutingModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
