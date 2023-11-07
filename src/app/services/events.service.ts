import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { collection, addDoc, getFirestore } from '@firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';

const db = getFirestore();

const colRef = collection(db, 'event');

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private events: Event[] = [];
  private eventUpdate = new Subject<Event[]>();

  constructor(private http: HttpClient, private firestore: Firestore) {}

  getDateBaseEvents(): Observable<Event[]> {
    const eventRef = collection(this.firestore, 'event');
    return collectionData(eventRef, { idField: 'eventid' }).pipe(
      map((data: Event[]) => {
        return data.map((event) => {
          return {
            eventid: event.eventid,
            title: event.title,
            allDay: event.allDay,
            startTime: event.startTime.toDate(),

            endTime: event.endTime.toDate(),
            subject: event.subject,
            description: event.description,
          };
        });
      })
    ) as Observable<any>;
  }

  getApiEvents() {
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
  addEvent(event: Event) {
    return addDoc(colRef, event);
  }
  convertTimestamp(timestamp) {
    let date = timestamp.toDate();
    let mm = date.getMonth();
    let dd = date.getDate();
    let yyyy = date.getFullYear();

    date = mm + '/' + dd + '/' + yyyy;
    return date;
  }
}

export interface Event {
  eventid?: string;
  title: string;
  allDay?: boolean;
  startTime: any;
  endTime: any;
  category?: string;
  subject?: string;
  description?: string;
}
