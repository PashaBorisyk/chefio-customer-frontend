import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMenuComponent } from './carousel-menu.component';

describe('CarouselMenuComponent', () => {
  let component: CarouselMenuComponent;
  let fixture: ComponentFixture<CarouselMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
