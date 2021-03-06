import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ProjectCommandListComponent } from './project-command-list.component';

describe('ProjectsCommandsComponent', () => {
  let component: ProjectCommandListComponent;
  let fixture: ComponentFixture<ProjectCommandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCommandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCommandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
