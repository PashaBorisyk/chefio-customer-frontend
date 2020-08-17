import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../../core/model/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url = environment.url + 'positions';

  constructor(private http: HttpClient) { }

  findByIdsIn(ids: string[]): Observable<Position[]> {
    return this.http.post<Position[]>(this.url + '/info', ids);
  }
}
