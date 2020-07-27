import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {JwtRequest} from '../../core/model/jwt-request';
import {map} from 'rxjs/operators';
import {JwtResponse} from '../../core/model/jwt-response';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../core/model/user';
import {Router} from '@angular/router';
import {AlertService} from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject(null);
  user = this.userSubject.asObservable();

  private url = environment.url;

  constructor(private http: HttpClient,
              private alertService: AlertService,
              private router: Router) { }

  login(jwtRequest: JwtRequest): Observable<JwtResponse> {
    const link = this.url + 'login';
    return this.http.post<JwtResponse>(link, jwtRequest)
      .pipe(map(data => {
        this.setToken(data.token);
        this.userSubject.next(
          {
            username: data.username,
            role: data.role
          });
        return data;
      }));
  }

  setToken(value: string): void {
    localStorage.setItem('token', value);
  }

  setUserValue(user: User): void {
    this.userSubject.next(user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['/home']);
    this.alertService.success('Успешный выход с аккаунта');
  }

  init(): Observable<User> {
    const link = this.url + 'init';
    return this.http.get<User>(link);
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get userValue(): User {
    return this.userSubject.value;
  }
}
