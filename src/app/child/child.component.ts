import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  isPrime:boolean
  capCount:number=0

  constructor(nobj:NumberService,sobj:StringService){
    this.isPrime=nobj.ChkPrime(115)
    this.capCount=sobj.CountCapital("Angular Web Development with Full Stack")
  }
}
