import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFullComponent } from './rating-full.component';

describe('RatingFullComponent', () => {
  let component: RatingFullComponent;
  let fixture: ComponentFixture<RatingFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
