import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../core/model/order';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = environment.url + 'orders';

  constructor(private http: HttpClient) { }

  save(order: Order): Observable<any> {
    return this.http.post(this.url, order);
  }

  orderDates(dates: Date[]): Observable<string[]> {
    const link = this.url + '/active';
    return this.http.post<string[]>(link, dates);
  }

  countOrders(): Observable<number> {
    const link = this.url + '/count';
    return this.http.get<number>(link);
  }

  getDate(page: number, size: number): Observable<Order[]> {
    const link = this.url + '?page=' + page + '&size=' + size;
    return this.http.get<Order[]>(link);
  }
}
