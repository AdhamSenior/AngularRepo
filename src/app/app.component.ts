import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private newsService: NewsService){}

  dataSource: any;
  categories = ['O\'zbekiston', 'Iqtisodiyot', 'LifeStyle', 'Sport', 'Texnologiya', 'Jamiyat'];

  openMenu()
  {
   console.log("click menu");
  }

  ngOnInit() {
    this.loadNews();
  }

  loadNews(){
    this.newsService.getNews().subscribe(result => {
        console.log(result);
        this.dataSource = result;
      },
      err => console.log('Error get schedules:', err),
    )
  }

}
