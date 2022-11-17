import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsObserverService {

  constructor(
    readonly breakpoint: BreakpointObserver
    ) { }

    readonly breakpointObserver$ = this.breakpoint.observe([
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.Tablet,
      Breakpoints.Handset,
      '(min-width:500px)'
    ]);
}
