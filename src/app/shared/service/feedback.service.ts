import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {FeedbackResponse} from '../../core/model/feedback-response';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private url = environment.url + 'feedback';

  constructor(private http: HttpClient) { }

  save(feedback: FeedbackResponse, file: File): Observable<any> {
    const formData: FormData = new FormData();
    const data = new Blob([JSON.stringify(feedback)], {
      type: 'application/json',
    });
    formData.append('file', file);
    formData.append('feedback', data);
    return this.http.post(this.url, formData);
  }

  getFeedback(page: number, size: number): Observable<FeedbackResponse[]> {
    const link = this.url + '?page=' + page + '&size=' + size;
    return this.http.get<FeedbackResponse[]>(link);
  }

  getFeedbackCount(): Observable<number> {
    const link = this.url + '/count';
    return this.http.get<number>(link);
  }
}
