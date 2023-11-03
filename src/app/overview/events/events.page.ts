import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  @Input() item = '';
  @Input() endTime = new Date ().toDateString();
  constructor() {}

  ngOnInit() {}
}
