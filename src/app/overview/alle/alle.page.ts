import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-alle',
  templateUrl: './alle.page.html',
  styleUrls: ['./alle.page.scss'],
})
export class AllePage implements OnInit {
  selectedButton: string = 'afleveringer';
  eventSubsription!: Subscription;
  eventList: any;

  onButtonSelected(site: string) {
    this.selectedButton = site;
  }

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.selectedButton = params['selectedButton'];
    });
    this.eventService.getApiEvents();
    this.eventSubsription = this.eventService
      .UpdateEventListner()
      .subscribe((events: any[]) => {
        this.eventList = events;
      });
  }
}
