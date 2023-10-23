import { Component, ViewChild } from '@angular/core';
import { CalendarMode } from 'ionic7-calendar/calendar.interface';
import { CalendarComponent } from 'ionic7-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(),
    locale: 'da-DK',
    formatHourColumn: 'H:MM',
    formatWeekTitle: `MMM 'uge' w`,
  };
  viewTitle = '';

  @ViewChild(CalendarComponent) myCalendar!: CalendarComponent;

  constructor() {}

  previousMonth() {
    this.myCalendar.slidePrev();
  }

  nextMonth() {
    this.myCalendar.slideNext();
  }
}
