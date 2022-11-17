import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeCarouselComponent implements OnInit {

  constructor() { }

  areImagesReady = true;
  images = [
    "https://loremflickr.com/1280/720",
    "https://loremflickr.com/1600/900",
    "https://loremflickr.com/1920/1080"
  ]

  ngOnInit(): void {
  }

}
