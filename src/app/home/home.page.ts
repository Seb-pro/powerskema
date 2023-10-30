import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { CalendarMode } from 'ionic7-calendar/calendar.interface';
import { CalendarComponent } from 'ionic7-calendar';
import { IonRouterOutlet } from '@ionic/angular';

import { format, parseISO } from 'date-fns';
import { IonModal } from '@ionic/angular/common';
import { Event, EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {
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
  newEvent: any = {
    title: '',
    allDay: false,
    startTime: null,
    endTime: null,
    category: '',
    subject: '',
    description: '',
  };
  showStart = false;
  showEnd = false;
  formattedSart = '';
  formattedend = '';

  eventSource: any[] = [];
  viewTitle: string = '';
  presentingElemement: any;

  @ViewChild(CalendarComponent) myCalendar!: CalendarComponent;
  @ViewChild('modal') modal!: IonModal;

  constructor(
    private ionRouterOutlet: IonRouterOutlet,
    private eventService: EventsService
  ) {
    this.presentingElemement = ionRouterOutlet.nativeEl;
  }

  ngOnInit() {
    const data: Event[] = [];
    this.eventService.getEvents().subscribe((res) => {
      data[res];
      this.eventSource.push(data);
      this.myCalendar.loadEvents();
    });
    console.log(this.eventSource);
  }

  previousMonth() {
    this.myCalendar.slidePrev();
  }

  nextMonth() {
    this.myCalendar.slideNext();
  }
  onViewTitleChange(title: string) {
    this.viewTitle = title;
  }

  onTimeSelected = (ev: { selectedTime: Date; events: any[] }) => {
    this.formattedSart = format(ev.selectedTime, 'HH:MM, MMM d, yyyy');
    this.newEvent.startTime = format(ev.selectedTime, "yyyy-MM-dd'T'HH:mm:ss");

    const later = ev.selectedTime.setHours(ev.selectedTime.getHours() + 1);
    this.formattedend = format(later, 'HH:MM, MMM d, yyyy');
    this.newEvent.endTime = format(later, "yyyy-MM-dd'T'HH:mm:ss");

    console.log(this.newEvent);
    // if (this.calendar.mode === 'day' || this.calendar.mode === 'week') {
    //   this.modal.present();
    // }
    if (this.calendar.mode === 'day') {
      this.modal.present();
    }
  };

  startTimeChanged(value: any) {
    this.newEvent.startTime = value;
    this.formattedSart = format(parseISO(value), 'HH:MM, MMM d, yyyy');
  }

  endTimeChanged(value: any) {
    this.newEvent.endTime = value;
    this.formattedend = format(parseISO(value), 'HH:MM, MMM d, yyyy');
  }
  addNewEvent() {
    //const addEvent: Event
  }
}
