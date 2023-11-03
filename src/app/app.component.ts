import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Skema', url: '/', icon: 'calendar' },
    { title: 'Lektier', url: 'alle/lektier', icon: 'book' },
    { title: 'Afleveringer', url: 'alle/afleveringer', icon: 'newspaper' },
    { title: 'Events', url: 'alle/events', icon: 'people' },
  ];

  constructor() {}
}
