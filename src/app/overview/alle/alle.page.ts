import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-alle',
  templateUrl: './alle.page.html',
  styleUrls: ['./alle.page.scss'],
})
export class AllePage implements OnInit {

  @Input() customFunction: ()=> void = ()=>{}; //laver en default funktion ()=>{} er for at omgå "Strict = false" i tsconfig.json

  constructor() { }

  ngOnInit() {
  }

}
