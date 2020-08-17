import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Question} from '../../core/model/question';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url = environment.url + 'questions';

  constructor(private http: HttpClient) { }

  save(question: Question): Observable<any> {
    return this.http.post(this.url, question);
  }
}
