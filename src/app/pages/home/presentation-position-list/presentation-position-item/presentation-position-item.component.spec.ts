import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPositionItemComponent } from './presentation-position-item.component';

describe('PresentationPositionItemComponent', () => {
  let component: PresentationPositionItemComponent;
  let fixture: ComponentFixture<PresentationPositionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationPositionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationPositionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
