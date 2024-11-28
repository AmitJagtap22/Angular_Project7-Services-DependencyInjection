import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  sum:number=0
  diff:number=0

  constructor(sobj:ArithmeticService){
    this.sum=sobj.Add(10,8)
    this.diff=sobj.Sub(10,8)
  }
}
