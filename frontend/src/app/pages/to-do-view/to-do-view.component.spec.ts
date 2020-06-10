import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoViewComponent } from './to-do-view.component';

describe('ToDoViewComponent', () => {
  let component: ToDoViewComponent;
  let fixture: ComponentFixture<ToDoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
