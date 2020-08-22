import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInfoCardComponent } from './mobile-info-card.component';

describe('MobileInfoCardComponent', () => {
  let component: MobileInfoCardComponent;
  let fixture: ComponentFixture<MobileInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
