import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1ExampleComponent } from './service1-example.component';

describe('Service1ExampleComponent', () => {
  let component: Service1ExampleComponent;
  let fixture: ComponentFixture<Service1ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Service1ExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service1ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
