import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderState = new Subject<boolean> ();

  constructor() { }

  subscribeOnLoader(): Observable<boolean> {
    return this.loaderState.asObservable();
  }

  changeLoaderState(data: boolean): void {
    this.loaderState.next(data);
  }
}
