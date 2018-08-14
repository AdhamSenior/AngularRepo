import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['O\'zbekiston', 'Iqtisodiyot', 'LifeStyle', 'Sport', 'Texnologiya', 'Jamiyat'];
  openMenu()
  {
   console.log("click menu");
  }
}
