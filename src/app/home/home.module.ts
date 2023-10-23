import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgCalendarModule } from 'ionic7-calendar';
import localeDa from '@angular/common/locales/da';
registerLocaleData(localeDa, 'da-DK');
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [HomePage],
  providers: [{ provide: LOCALE_ID, useValue: 'da-DK' }],
})
export class HomePageModule {}
