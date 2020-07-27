import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPositionCarouselComponent } from './card-position-carousel.component';

describe('CardPositionCarouselComponent', () => {
  let component: CardPositionCarouselComponent;
  let fixture: ComponentFixture<CardPositionCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPositionCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPositionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
