import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeWorkPage } from './home-work.page';

const routes: Routes = [
  {
    path: '',
    component: HomeWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeWorkPageRoutingModule {}
