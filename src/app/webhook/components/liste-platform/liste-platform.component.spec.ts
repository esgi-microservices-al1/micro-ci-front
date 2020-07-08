import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePlatformComponent } from './liste-platform.component';

describe('ListePlatformComponent', () => {
  let component: ListePlatformComponent;
  let fixture: ComponentFixture<ListePlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
