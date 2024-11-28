import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  capCount:number=0

  constructor(sobj:StringService){
    this.capCount=sobj.CountCapital("Marvellous Infosystems")
  }
}
