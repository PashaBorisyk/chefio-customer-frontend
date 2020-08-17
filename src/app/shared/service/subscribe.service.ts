import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private clickSubject = new BehaviorSubject(null);
  clickObserver = this.clickSubject.asObservable();

  constructor() { }

  onClick(event: any): void {
    this.clickSubject.next(event);
  }
}
