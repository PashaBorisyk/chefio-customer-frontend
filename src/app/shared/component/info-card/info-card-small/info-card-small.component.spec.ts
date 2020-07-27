import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardSmallComponent } from './info-card-small.component';

describe('InfoCardSmallComponent', () => {
  let component: InfoCardSmallComponent;
  let fixture: ComponentFixture<InfoCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
