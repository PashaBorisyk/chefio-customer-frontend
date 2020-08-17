import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCardPositionItemComponent } from './history-card-position-item.component';

describe('HistoryCardPositionItemComponent', () => {
  let component: HistoryCardPositionItemComponent;
  let fixture: ComponentFixture<HistoryCardPositionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCardPositionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCardPositionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
