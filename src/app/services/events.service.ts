import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private events: Event[] = [];
  private eventUpdate = new Subject<Event[]>();

  constructor(private http: HttpClient) {}

  async init() {}

  getEvents(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/event');
  }
  // getEvents() {
  //   return this.http
  //     .get<{ message: string; events: Event[] }>(
  //       'http://localhost8100/api/events'
  //     )
  //     .subscribe((eventData) => {
  //       this.events = eventData.events;
  //       this.eventUpdate.next([...this.events]);
  //     });
  // }
}

export interface Event {
  eventid: number;
  title: string;
  allDay: boolean;
  startTime: Date;
  endTime: Date;
  category: string;
  subject: string;
  description: string;
}
