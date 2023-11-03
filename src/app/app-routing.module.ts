import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AllePage } from './overview/alle/alle.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./modal/modal.module').then((m) => m.ModalPageModule),
  },
  {
    path: 'home-work',
    loadChildren: () => import('./overview/home-work/home-work.module').then( m => m.HomeWorkPageModule)
  },
  {
    path: 'assignment',
    loadChildren: () => import('./overview/assignment/assignment.module').then( m => m.AssignmentPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./overview/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'alle/:selectedButton',
    loadChildren: () => import('./overview/alle/alle.module').then( m => m.AllePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
