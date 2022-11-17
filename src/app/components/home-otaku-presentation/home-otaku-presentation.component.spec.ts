import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOtakuPresentationComponent } from './home-otaku-presentation.component';

describe('HomeOtakuPresentationComponent', () => {
  let component: HomeOtakuPresentationComponent;
  let fixture: ComponentFixture<HomeOtakuPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOtakuPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOtakuPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
