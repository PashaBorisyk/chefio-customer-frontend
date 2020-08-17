import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerContact} from '../../core/model/customer-contact';

@Injectable({
  providedIn: 'root'
})
export class CustomerContactService {

  private url = environment.url + 'customers/info';

  constructor(private http: HttpClient) { }

  getContactInfo(): Observable<CustomerContact> {
    return this.http.get<CustomerContact>(this.url);
  }

  save(customerContact: CustomerContact): Observable<any> {
    return this.http.post(this.url, customerContact);
  }
}
