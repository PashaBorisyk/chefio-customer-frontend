import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {FeedbackStar} from '../../core/model/feedback-star';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackStarService {

  private url = environment.url + 'feedback/star';

  constructor(private http: HttpClient) { }

  save(feedbackStar: FeedbackStar): Observable<any> {
    return this.http.post(this.url, feedbackStar);
  }

  get feedbackStar(): any {
    return localStorage.getItem('star');
  }

  setFeedbackStar(): void {
    localStorage.setItem('star', 'true');
  }
}
