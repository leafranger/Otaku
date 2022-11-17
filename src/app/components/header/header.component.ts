import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  constructor(
    private responsive: BreakpointObserver,
    private primengConfig : PrimeNGConfig
    ) {}

  isScreenSmall = false;
  display = false;

  isSidebarOpen = false;

  // Checks Breakpoints of Small, XSmall, Mobile Portrait screens
  checkSmallScreen()
  {
    this.responsive.observe([
      Breakpoints.Small,
      Breakpoints.XSmall,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.isScreenSmall = result.matches;

    })
  }

  // Checks Breakpoints of Medium, Tablet, Mobile Landscape screens
  checkMediumScreen()
  {
    this.responsive.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.Medium
    ]).subscribe(result => {
      if (result.matches) { this.isScreenSmall = false}
    })
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.checkSmallScreen();
    this.checkMediumScreen();
  }
}
