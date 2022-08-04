import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service2ExampleComponent } from './service2-example.component';

describe('Service2ExampleComponent', () => {
  let component: Service2ExampleComponent;
  let fixture: ComponentFixture<Service2ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Service2ExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service2ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
