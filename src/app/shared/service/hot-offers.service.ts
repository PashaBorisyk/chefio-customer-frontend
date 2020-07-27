import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HotOffers} from '../../core/model/hot-offers';
import {Position} from '../../core/model/position';

@Injectable({
  providedIn: 'root'
})
export class HotOffersService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  getHotOffers(): Observable<Position[]> {
    const link = this.url + 'hotoffers';
    return this.http.get<Position[]>(link);
  }
}
