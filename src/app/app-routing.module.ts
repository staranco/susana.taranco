import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './feature/home/home.component';
import { WorksComponent } from './feature/works/works.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      state: 'home',
      header: {
        backButton: false
      }
    }
  },
  {
    path: 'works',
    component: WorksComponent,
    data: {
      state: 'works',
      header: {
        backButton: false
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
