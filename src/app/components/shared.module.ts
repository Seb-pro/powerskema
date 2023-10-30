import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeWorkPage } from '../overview/home-work/home-work.page';
import { EventsPage } from '../overview/events/events.page';
import { AssignmentPage } from '../overview/assignment/assignment.page';
  
 
@NgModule({
  declarations: [
    HomeWorkPage,
    EventsPage,
    AssignmentPage
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [HomeWorkPage, EventsPage, AssignmentPage]
})
export class SharedModule { }