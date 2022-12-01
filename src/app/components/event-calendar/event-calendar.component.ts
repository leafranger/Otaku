import { Component, OnInit } from '@angular/core';
import { BreakpointsObserverService } from 'src/app/services/breakpoints-observer.service';
import { Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { EventsList } from '../../interfaces/events-list';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  constructor(
    private responsiveService : BreakpointsObserverService,
    private http : HttpClient
  ) { }

  tokenClient: any;
  gapiInited = false;
  gisInited = false;

  gcAPIKey = "AIzaSyDbq9jTkz-KyQm-rMG8Igzb1JbDOuWglyc"
  clientID = "elsword4316@gmail.com"
  apiURL = `https://www.googleapis.com/calendar/v3/calendars/${this.clientID}/events`
  events$? : Subscription
  events : any[] = []
  eventsLoaded = false

  fetchEvents()
  {
    this.events$ = this.http.get<EventsList>(this.apiURL).subscribe({
      next:(data) => { this.events = data.items },
      error:(error) => {console.log(error)},
      complete:() => { this.eventsLoaded = true},
    })
  }

  ngOnInit(): void {

    this.responsiveService.breakpointObserver$.subscribe(() =>
    this.breakpointChanged());
    this.fetchEvents();
  }

  breakpointChanged()
  {
    switch (true)
    {
      case this.responsiveService.breakpoint.isMatched(Breakpoints.Large):
      {

        break;
      }

      case this.responsiveService.breakpoint.isMatched(Breakpoints.Tablet):
      case this.responsiveService.breakpoint.isMatched(Breakpoints.Medium):
      {

        break;
      }

      case this.responsiveService.breakpoint.isMatched(Breakpoints.Handset):
      case this.responsiveService.breakpoint.isMatched(Breakpoints.Small):
      {

        break;
      }
    }
  }
}
