import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';
import {News} from './models/News';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private content: string;
  public query: string;

  public highlight() {
    if (!this.query) {
      return this.content;
    }
    return this.content.replace(new RegExp(this.query, 'gi'), match => {
      return '<span class="highlightText">' + match + '</span>';
    });
  }
  constructor(private newsService: NewsService) {
    this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Praesent a quam ornare, bibendum ligula a, rhoncus ligula. Etiam aliquet,' +
      ' justo sollicitudin imperdiet luctus, nulla justo sodales mi, sit amet semper' +
      ' nisl velit vel massa. In hac habitasse platea dictumst.';
  }
  dataSource: News[] = [];
  categories = ['O\'zbekiston', 'Iqtisodiyot', 'LifeStyle', 'Sport', 'Texnologiya', 'Jamiyat'];

  openMenu() {
   console.log('click menu');
  }
  ngOnInit() {
    this.loadNews();
  }
  loadNews() {
    this.dataSource = this.newsService.getNews();
  }

}
