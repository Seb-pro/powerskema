import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllePage } from './alle.page';

const routes: Routes = [
  {
    path: '',
    component: AllePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllePageRoutingModule {}
