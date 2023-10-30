import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Skema', url: '/', icon: 'calendar' },
    { title: 'Lektier', url: 'alle/button1', icon: 'book' },
    { title: 'Afleveringer', url: 'alle/button2', icon: 'newspaper' },
    { title: 'Events', url: 'alle/button3', icon: 'people' },
  ];

  // Not sure if this is needed
  public labels = ['Skema', 'Lektier', 'Afleveringer', 'Events'];
 
  constructor() {}
}
