import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  newEvent = {
    title: '',
    allDay: false,
    startTime: new Date(),
    endTime: new Date(),
  };
  validationForm!: FormGroup;
  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  addNewEvent() {}

  ngOnInit() {}
}
