import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from '../../core/model/menu';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url = environment.url;
  private menuDateSubject = new BehaviorSubject(null);
  menuDateObserver = this.menuDateSubject.asObservable();

  constructor(private http: HttpClient) { }

  getMenuByDate(date: string): Observable<Menu[]> {
    const link = this.url + 'menu/getByDate?date=' + date;
    return this.http.get<Menu[]>(link);
  }

  getMenuInDate(dates: string[]): Observable<Date[]> {
    const link = this.url + 'menu/active';
    return this.http.post<Date[]>(link, dates);
  }

  changeMenuDate(date: string): void {
    this.menuDateSubject.next(date);
  }
}
