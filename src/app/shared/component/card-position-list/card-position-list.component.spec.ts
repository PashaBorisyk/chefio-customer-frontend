import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPositionListComponent } from './card-position-list.component';

describe('CardPositionListComponent', () => {
  let component: CardPositionListComponent;
  let fixture: ComponentFixture<CardPositionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPositionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
