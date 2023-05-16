import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = ''
  @Output() loaded = new EventEmitter();
  imgDefault: string = 'https://www.m2crowd.com/core/i/placeholder.png'
  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded(){
    console.log('img cargada');
    this.loaded.emit();
  }
}
