import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-alle',
  templateUrl: './alle.page.html',
  styleUrls: ['./alle.page.scss'],
})
export class AllePage implements OnInit {

  selectedButton: string = "button1";

  onButtonSelected(button:string){
    this.selectedButton=button;
  }

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.selectedButton=params['selectedButton']
    })
  }

}
