import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AddressAutoComplete} from '../../core/model/address-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  autoCompleteAddress(value: string): Observable<AddressAutoComplete> {
    return this.http.get<AddressAutoComplete>(this.url + 'address/find?value=' + value);
  }
}
