import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private default_message=new BehaviorSubject<string>("");
  current_message=this.default_message.asObservable();

  constructor() { }

  message(mess:string){
    this.default_message.next(mess);
  }

}
