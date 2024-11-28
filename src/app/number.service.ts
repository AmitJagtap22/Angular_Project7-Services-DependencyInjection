import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(num:number):boolean{
    var cnt:number=0
    var flag:number=0

    for(cnt=2;cnt<num;cnt++){
      if(num%cnt==0){
        flag++
      }
    }
    if(flag<1){
      return true
    }
    else{
      return false
    }
  }
}
