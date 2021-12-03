import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProjectPageComponent } from './display-project-page.component';

describe('DisplayProjectPageComponent', () => {
  let component: DisplayProjectPageComponent;
  let fixture: ComponentFixture<DisplayProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProjectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
