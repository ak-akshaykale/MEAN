import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  result=0;
  num1:string;
  num2:string;
  clockhide=false;
  call_Comp()
  {
    if(this.clockhide==false)
    this.clockhide=true
    else
    this.clockhide=false
  }
  sum()
  {
    this.result=parseInt(this.num1)+parseInt(this.num2);
  }
  sub()
  {
    this.result=parseInt(this.num1)-parseInt(this.num2);
  }
  div()
  {
    this.result=parseInt(this.num1)+parseInt(this.num2);
  }
  mul()
  {
    this.result=parseInt(this.num1)+parseInt(this.num2);
  }
}
