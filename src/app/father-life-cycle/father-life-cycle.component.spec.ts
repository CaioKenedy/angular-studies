import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherLifeCycleComponent } from './father-life-cycle.component';

describe('FatherLifeCycleComponent', () => {
  let component: FatherLifeCycleComponent;
  let fixture: ComponentFixture<FatherLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherLifeCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
