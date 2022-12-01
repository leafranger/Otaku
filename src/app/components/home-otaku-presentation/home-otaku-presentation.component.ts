import { Component, OnInit } from '@angular/core';
import { AssetsFolder } from 'src/app/classes/assets-folder';

@Component({
  selector: 'app-home-otaku-presentation',
  templateUrl: './home-otaku-presentation.component.html',
  styleUrls: ['./home-otaku-presentation.component.scss']
})
export class HomeOtakuPresentationComponent implements OnInit {

  constructor() { }

  path = new AssetsFolder

  otakuPresentationImage = `${this.path.imageFolder}otaku-salottino-con-divano.jpg`


  ngOnInit(): void {
  }

}
