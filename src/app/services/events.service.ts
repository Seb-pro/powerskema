import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private events: Event[] = [];
  private eventUpdate = new Subject<Event[]>();

  constructor(private http: HttpClient) {}

  async init() {}

  getEvents() {
    this.http
      .get<{ message: string; events: Event[] }>(
        'http://localhost:3000/api/events'
      )
      .pipe(
        map((data) => {
          return data.events.map((event) => {
            return {
              eventid: event.eventid,
              title: event.title,
              allDay: event.allDay,
              startTime: new Date(event.startTime),
              endTime: new Date(event.endTime),
              category: event.category,
              subject: event.subject,
              description: event.description,
            };
          });
        })
      )
      .subscribe((transformedBlog) => {
        this.events = transformedBlog;
        this.eventUpdate.next(this.events);
      });
  }

  UpdateEventListner() {
    return this.eventUpdate.asObservable();
  }
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
