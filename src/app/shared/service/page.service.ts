import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PresentationCarouselItem} from '../../core/model/presentation-carousel-item';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private url = environment.url + 'pages';

  constructor(private http: HttpClient) { }

  getActivePages(): Observable<PresentationCarouselItem[]> {
    return this.http.get<PresentationCarouselItem[]>(this.url);
  }
}
