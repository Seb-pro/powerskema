import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Skema', url: '/', icon: 'calendar' },
    { title: 'Lektier', url: 'home-work', icon: 'book' },
    { title: 'Afleveringer', url: 'assignment', icon: 'newspaper' },
    { title: 'Events', url: 'events', icon: 'people' },
  ];

  // Not sure if this is needed
  public labels = ['Skema', 'Lektier', 'Afleveringer', 'Events'];
 
  constructor() {}
}
