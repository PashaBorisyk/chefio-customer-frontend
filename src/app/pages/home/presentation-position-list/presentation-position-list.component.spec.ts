import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPositionListComponent } from './presentation-position-list.component';

describe('PresentationPositionListComponent', () => {
  let component: PresentationPositionListComponent;
  let fixture: ComponentFixture<PresentationPositionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationPositionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationPositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
