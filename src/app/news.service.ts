import { Injectable } from '@angular/core';

import {News} from './models/News';
import {news} from './mocks/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  public getNews(): News[] {
    return (news); }}

