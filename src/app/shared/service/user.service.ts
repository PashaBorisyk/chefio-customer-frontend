import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto} from '../../core/model/user-dto';
import {CustomerInfo} from '../../core/model/customer-info';
import {PageCustomer} from '../../core/dto/page-customer';
import {UserRequest} from '../../pages/users/users.component';
import {CompanyInfo} from '../../core/model/company-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.url;
  private registrationUserSubject = new BehaviorSubject('example@gmal.com');
  registrationUser = this.registrationUserSubject.asObservable();

  private usersListSubject = new BehaviorSubject(false);
  usersListObserver = this.usersListSubject.asObservable();

  private orderActiveTimesSubject = new BehaviorSubject(null);
  orderActiveTimesObserver = this.orderActiveTimesSubject.asObservable();

  constructor(private http: HttpClient) { }

  nextActiveTimes(value: string[]): void {
    this.orderActiveTimesSubject.next(value);
  }

  registration(user: UserDto): Observable<any> {
    const link = this.url + 'customers';
    return this.http.post(link, user);
  }

  getInfo(): Observable<CompanyInfo> {
    const link = this.url + 'customers/info/company';
    return this.http.get<CompanyInfo>(link);
  }

  getTeammates(userRequest: UserRequest): Observable<PageCustomer> {
    const link = this.url + 'customers/teammates';
    return this.http.post<PageCustomer>(link, userRequest);
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

  createNewUser(customerInfo: CustomerInfo): Observable<any> {
    const link = this.url + 'customers/save';
    return this.http.post(link, customerInfo);
  }
}
