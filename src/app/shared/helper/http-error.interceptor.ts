import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AlertService} from '../service/alert.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  private DEFAULT_MESSAGE = 'Произошла ошибка, пожалуйста повторите попытку позже';

  constructor(private alertService: AlertService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const message = error.error.message ? error.error.message : this.DEFAULT_MESSAGE;
        this.alertService.errorMessage(message);
        return throwError(error);
      }));
  }
}
