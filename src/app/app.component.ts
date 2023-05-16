import { Component } from '@angular/core';

import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/200';
  showImg = true;

  toggleImg() {
    this.showImg = !this.showImg;
  };

  onLoaded(){
    console.log('loaded padre')
  }
}
