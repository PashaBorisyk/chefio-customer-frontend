import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto} from '../../core/model/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.url;
  private registrationUserSubject = new BehaviorSubject('example@gmal.com');
  registrationUser = this.registrationUserSubject.asObservable();


  constructor(private http: HttpClient) { }


  registration(user: UserDto): Observable<any> {
    const link = this.url + 'customers';
    return this.http.post(link, user);
  }

  nextUser(value: string): void {
    this.registrationUserSubject.next(value);
  }
}
