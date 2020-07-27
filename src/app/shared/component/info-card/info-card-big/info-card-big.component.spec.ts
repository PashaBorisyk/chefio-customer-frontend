import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardBigComponent } from './info-card-big.component';

describe('InfoCardBigComponent', () => {
  let component: InfoCardBigComponent;
  let fixture: ComponentFixture<InfoCardBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCardBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
