import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {UserDto} from "../../core/model/user-dto";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  createReportByUsers(dateFrom:Date,dateTo:Date): Observable<any> {
    const link = `${this.url}reports/createReportByUsers?dateFrom=${dateFrom}&dateTo=${dateTo}`;
    return this.http.get(link,{responseType:"blob"});
  }

}
