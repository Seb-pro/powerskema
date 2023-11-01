import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.page.html',
  styleUrls: ['./home-work.page.scss'],
})
export class HomeWorkPage implements OnInit {
  @Input() item = '';
  @Input() endTime = '';
  constructor() {}

  ngOnInit() {}
}
