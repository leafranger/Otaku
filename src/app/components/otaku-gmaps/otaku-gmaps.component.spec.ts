import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtakuGmapsComponent } from './otaku-gmaps.component';

describe('OtakuGmapsComponent', () => {
  let component: OtakuGmapsComponent;
  let fixture: ComponentFixture<OtakuGmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtakuGmapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtakuGmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
