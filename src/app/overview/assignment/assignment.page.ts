import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {
  @Input() item = '';
  constructor() {}

  ngOnInit() {}
}
