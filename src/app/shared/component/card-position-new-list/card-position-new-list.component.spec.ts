import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPositionNewListComponent } from './card-position-new-list.component';

describe('CardPositionNewListComponent', () => {
  let component: CardPositionNewListComponent;
  let fixture: ComponentFixture<CardPositionNewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPositionNewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPositionNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
