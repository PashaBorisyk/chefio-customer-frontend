import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePlanComponent } from './feature-plan.component';

describe('FeaturePlanComponent', () => {
  let component: FeaturePlanComponent;
  let fixture: ComponentFixture<FeaturePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
