import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = environment.url + 'companies';

  constructor(private http: HttpClient) { }

  getLogo(): Observable<string[]> {
    return this.http.get<string[]>(this.url + '/logo');
  }
}
