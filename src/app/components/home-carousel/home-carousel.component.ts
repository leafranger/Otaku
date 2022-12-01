import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssetsFolder } from '../../classes/assets-folder';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeCarouselComponent implements OnInit {

  constructor() { }

  path = new AssetsFolder
  images = [
    `${this.path.imageFolder}otaku-sala-evento.jpg`,
    `${this.path.imageFolder}otaku-sala-evento-dnd.jpg`,
    `${this.path.imageFolder}otaku-marcello-con-doraemon.jpg`,
    `${this.path.imageFolder}otaku-it-decorazione.jpg`
  ]

  ngOnInit(): void {
  }

}
