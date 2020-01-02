import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time:string=""
  constructor() {
    setInterval(()=>{
      this.time = new Date().toLocaleTimeString();
    },1000);
   }

  ngOnInit() {
  }

}
