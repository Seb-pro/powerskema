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
    formatHourColumn: 'H:MM',
    formatWeekTitle: `MMM 'uge' w`,
  };
  options = {
    spaceBetween: 10,
    threshold: 50,
  };
  viewTitle: string = '';

  @ViewChild(CalendarComponent) myCalendar!: CalendarComponent;

  constructor() {}

  previousMonth() {
    this.myCalendar.slidePrev();
  }

  nextMonth() {
    this.myCalendar.slideNext();
  }
  onViewTitleChange(title: string) {
    this.viewTitle = title;
  }
}
