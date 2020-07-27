import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPositionComponent } from './card-position.component';

describe('CardPositionComponent', () => {
  let component: CardPositionComponent;
  let fixture: ComponentFixture<CardPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
