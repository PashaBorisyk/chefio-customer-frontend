import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceTimeComponent } from './choice-time.component';

describe('ChoiceTimeComponent', () => {
  let component: ChoiceTimeComponent;
  let fixture: ComponentFixture<ChoiceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
