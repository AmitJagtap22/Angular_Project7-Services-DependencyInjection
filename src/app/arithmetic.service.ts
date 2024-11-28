import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Add(n1:number,n2:number):number{
    return n1+n2
  }
  public Sub(n1:number,n2:number):number{
    return n1-n2
  }
}
