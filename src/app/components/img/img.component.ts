import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = ''
  @Output() loaded = new EventEmitter();
  imgDefault: string = 'https://www.m2crowd.com/core/i/placeholder.png';

  counter = 0;
  counterFn: number|undefined;

  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded(){
    console.log('img cargada');
    this.loaded.emit();
  }

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    // before - during render
    // changes inputs -- multiples times
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    // console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);
  }
}
