import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PositionGroup} from '../../core/model/position-group';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  findAll(): Observable<PositionGroup[]> {
    const link = this.url + 'categories';
    return this.http.get<PositionGroup[]>(link);
  }
}
