import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBlockComponent } from './phone-block.component';

describe('PhoneBlockComponent', () => {
  let component: PhoneBlockComponent;
  let fixture: ComponentFixture<PhoneBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
