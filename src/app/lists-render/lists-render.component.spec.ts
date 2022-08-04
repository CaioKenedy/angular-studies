import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsRenderComponent } from './lists-render.component';

describe('ListsRenderComponent', () => {
  let component: ListsRenderComponent;
  let fixture: ComponentFixture<ListsRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
