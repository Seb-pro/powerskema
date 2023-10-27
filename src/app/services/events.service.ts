import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: Event[] = []
  constructor(private http: HttpClient) { }
  // getEvents() {
  //   this.http get<{ message: string, events: Event[] }>('http//localhost:8001/api/events').sub
  // }
}



export interface Event {
  eventid: number,
  title: string,
  allDay: boolean,
  startTime: Date,
  endTime: Date,
  category: string,
  subject: string,
  description: string,
}