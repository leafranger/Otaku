import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { GMapModule } from 'primeng/gmap';

import { CarouselModule } from 'ngx-bootstrap/carousel'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomeOtakuPresentationComponent } from './components/home-otaku-presentation/home-otaku-presentation.component';
import { OtakuGmapsComponent } from './components/otaku-gmaps/otaku-gmaps.component';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, HomeCarouselComponent, HomeOtakuPresentationComponent, OtakuGmapsComponent, EventCalendarComponent, AboutComponent, ContactsComponent, InfoComponent],
  imports: [

    ButtonModule,
    SidebarModule,
    StyleClassModule,
    GMapModule,

    CarouselModule,

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
