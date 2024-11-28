import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  isPrime:boolean
  
  constructor(nobj:NumberService){
    this.isPrime=nobj.ChkPrime(53)
  }
}
