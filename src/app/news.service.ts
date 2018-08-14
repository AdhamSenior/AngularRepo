import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {News} from './models/news';
import {news} from './mocks/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  public getNews(): Observable<News[]> {
    return Observable.of(news).delay(2000);
  }

}
}
