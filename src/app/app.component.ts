import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Skema', url: '/', icon: 'calendar' },
    { title: 'Lektier', url: '/', icon: 'book' },
    { title: 'Afleveringer', url: '/', icon: 'newspaper' },
    { title: 'Events', url: '/', icon: 'people' },
  ];

  // Not sure if this is needed
  public labels = ['Skema', 'Lektier', 'Afleveringer', 'Events'];
 
  constructor() {}
}
