import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Schedule.TestComponent } from './schedule.test.component';

describe('Schedule.TestComponent', () => {
  let component: Schedule.TestComponent;
  let fixture: ComponentFixture<Schedule.TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schedule.TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Schedule.TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
