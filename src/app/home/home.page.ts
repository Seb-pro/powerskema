import { Component, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { CalendarMode } from 'ionic7-calendar/calendar.interface';
import { CalendarComponent } from 'ionic7-calendar';
import { ModalController } from '@ionic/angular';

import { ModalPage } from '../modal/modal.page';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
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
  newEvent: any = {
    title: '',
    allDay: false,
    startTime: '',
    endTime: '',
  };
  showStart = false;
  showEnd = false;
  formattedSart = '';
  formattedend = '';

  eventSource: any[] = [];
  viewTitle: string = '';

  @ViewChild(CalendarComponent) myCalendar!: CalendarComponent;

  constructor(private modalCtrl: ModalController) {}

  async openList() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        newEvent: {
          title: this.newEvent.title,
          allDay: this.newEvent.allDay,
          startTime: this.newEvent.startTime,
          endTime: this.newEvent.endTime,
        },

        formattedSart: this.formattedSart,
        formattedend: this.formattedend,
      },
    });

    await modal.present();
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

    if (this.calendar.mode === 'day' || this.calendar.mode === 'week') {
      this.openList();
    }
  };
}
