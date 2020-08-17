import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ClientRequest} from '../../core/model/client-request';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientRequestService {

  private url = environment.url + 'client/request';

  constructor(private http: HttpClient) { }

  save(clientRequest: ClientRequest): Observable<any> {
    return this.http.post(this.url, clientRequest);
  }
}
