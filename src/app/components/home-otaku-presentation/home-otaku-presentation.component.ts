import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-otaku-presentation',
  templateUrl: './home-otaku-presentation.component.html',
  styleUrls: ['./home-otaku-presentation.component.scss']
})
export class HomeOtakuPresentationComponent implements OnInit {

  constructor() { }

  otakuPresentationImage = "https://loremflickr.com/1600/900"


  ngOnInit(): void {
  }

}
