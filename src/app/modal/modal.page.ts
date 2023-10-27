import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  newEvent: any = {
    title: '',
    allDay: false,
    startTime: null,
    endTime: null,
  };
  showStart = false;
  showEnd = false;
  formattedSart: string = '';
  formattedend = '';

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  startTimeChanged(value: any) {
    this.newEvent.startTime = value;
    this.formattedSart = format(parseISO(value), 'HH:MM, MMM d, yyyy');
  }

  endTimeChanged(value: any) {
    this.newEvent.endTime = value;
    this.formattedend = format(parseISO(value), 'HH:MM, MMM d, yyyy');
  }
  addNewEvent() {
    this.modalCtrl.dismiss({ event: this.newEvent });
  }
}

export interface Event {
  title: string;
  allDay: boolean;
  startTime?: string;
  endTime?: string;
}
