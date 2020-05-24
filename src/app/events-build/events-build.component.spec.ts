import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBuildComponent } from './events-build.component';

describe('EventsBuildComponent', () => {
  let component: EventsBuildComponent;
  let fixture: ComponentFixture<EventsBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
