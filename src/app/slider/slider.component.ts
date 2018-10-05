import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides:any = [
    {img: '/assets/img/banner-home.jpg', title: 'Hello', title2: 'NewYork', subtitle: 'Consectetur adipisicing elit, sedempor incididunt ut labore et dolore magna aliqua.'},
    {img: '/assets/img/banner-home2.jpg', title: 'Welcome to', title2: 'Manhattan', subtitle: 'Adipisicing elit, sedempor incididunt ut labore et dolore magna aliqua.'}
  ]

  constructor(private _sanitizer: DomSanitizer) { }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  ngOnInit() {
  }

}
