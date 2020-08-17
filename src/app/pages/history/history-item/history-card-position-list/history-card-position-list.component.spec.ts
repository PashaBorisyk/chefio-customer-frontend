import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCardPositionListComponent } from './history-card-position-list.component';

describe('HistoryCardPositionListComponent', () => {
  let component: HistoryCardPositionListComponent;
  let fixture: ComponentFixture<HistoryCardPositionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCardPositionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCardPositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
