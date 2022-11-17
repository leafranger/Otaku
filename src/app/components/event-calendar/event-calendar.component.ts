import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BreakpointsObserverService } from 'src/app/services/breakpoints-observer.service';
import { Breakpoints } from '@angular/cdk/layout';

// make the <full-calendar> element globally available by calling this function at the top-level
defineFullCalendarElement();

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  constructor(
    private responsiveService : BreakpointsObserverService
  ) { }



  headerToolbarLgModel = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay'
  }

  headerToolbarMdModel = {
    left: 'prev,next',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek'
  }

  headerToolbarSmModel = {
    left: '',
    center: 'title',
    right:''
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: this.headerToolbarLgModel
  };

  ngOnInit(): void {

    this.responsiveService.breakpointObserver$.subscribe(() =>
    this.breakpointChanged());
  }

  breakpointChanged()
  {
    switch (true)
    {
      case this.responsiveService.breakpoint.isMatched(Breakpoints.Large):
      {
        this.calendarOptions =
        {
          ...this.calendarOptions,
          headerToolbar: this.headerToolbarLgModel,
          footerToolbar: false
        }
        break;
      }

      case this.responsiveService.breakpoint.isMatched(Breakpoints.Tablet):
      case this.responsiveService.breakpoint.isMatched(Breakpoints.Medium):
      {
        this.calendarOptions =
        {
          ...this.calendarOptions,
          headerToolbar: this.headerToolbarMdModel,
          footerToolbar: false
        }
        break;
      }

      case this.responsiveService.breakpoint.isMatched(Breakpoints.Handset):
      case this.responsiveService.breakpoint.isMatched(Breakpoints.Small):
      {
        this.calendarOptions =
        {
          ...this.calendarOptions,
          headerToolbar: this.headerToolbarSmModel,
          footerToolbar:
          {
            left: 'prev,next',
            center: '',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
          }
        }
        break;
      }
    }
  }
}
