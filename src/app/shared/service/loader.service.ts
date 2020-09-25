import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderState = new Subject<boolean> ();
  private loaderMenuState = new Subject<boolean>();

  constructor() { }

  subscribeOnLoader(): Observable<boolean> {
    return this.loaderState.asObservable();
  }

  changeLoaderState(data: boolean): void {
    this.loaderState.next(data);
  }

  subscribeOnMenuLoader(): Observable<boolean> {
    return this.loaderMenuState.asObservable();
  }

  changeMenuLoaderState(data: boolean): void {
    this.loaderMenuState.next(data);
  }
}
