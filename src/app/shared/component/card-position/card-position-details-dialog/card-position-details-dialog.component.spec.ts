import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPositionDetailsDialogComponent } from './card-position-details-dialog.component';

describe('CardPositionDetailsDialogComponent', () => {
  let component: CardPositionDetailsDialogComponent;
  let fixture: ComponentFixture<CardPositionDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPositionDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPositionDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
