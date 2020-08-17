import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto} from '../../core/model/user-dto';
import {CustomerInfo} from '../../core/model/customer-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.url;
  private registrationUserSubject = new BehaviorSubject('example@gmal.com');
  registrationUser = this.registrationUserSubject.asObservable();

  private usersListSubject = new BehaviorSubject(false);
  usersListObserver = this.usersListSubject.asObservable();

  constructor(private http: HttpClient) { }


  registration(user: UserDto): Observable<any> {
    const link = this.url + 'customers';
    return this.http.post(link, user);
  }

  getTeammates(page: number, size: number): Observable<CustomerInfo[]> {
    const link = this.url + 'customers/teammates?page=' + page + '&size=' + size;
    return this.http.get<CustomerInfo[]>(link);
  }

  getCountTeammates(): Observable<number> {
    const link = this.url + 'customers/teammates/count';
    return this.http.get<number>(link);
  }

  deleteById(id: number): Observable<any> {
    const link = this.url + 'customers/' + id;
    return this.http.delete(link);
  }

  update(customerInfo: CustomerInfo): Observable<any> {
    const link = this.url + 'customers';
    return this.http.put(link, customerInfo);
  }

  nextUser(value: string): void {
    this.registrationUserSubject.next(value);
  }

  reloadUsersList(): void {
    this.usersListSubject.next(true);
  }
}
