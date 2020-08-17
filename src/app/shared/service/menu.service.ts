import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from '../../core/model/menu';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {MenuDate} from '../../core/model/menu-date';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url = environment.url;

  private menuDateSubject = new BehaviorSubject(null);
  menuDateObserver = this.menuDateSubject.asObservable();

  private menuDateInitSubject = new BehaviorSubject<MenuDate>(null);
  menuDateInitObserver = this.menuDateInitSubject.asObservable();

  constructor(private http: HttpClient) { }

  get date(): string {
    return this.menuDateSubject.value;
  }

  getMenuByDate(date: string): Observable<Menu[]> {
    const link = this.url + 'menu/getByDate?date=' + date;
    return this.http.get<Menu[]>(link);
  }

  getMenuInDate(dates: Date[]): Observable<Date[]> {
    const link = this.url + 'menu/active';
    return this.http.post<Date[]>(link, dates);
  }

  changeMenuDate(date: Date): void {
    this.menuDateSubject.next(date);
  }

  changeMenuDateInit(menuDate: MenuDate): void {
    this.menuDateInitSubject.next(menuDate);
  }
}
