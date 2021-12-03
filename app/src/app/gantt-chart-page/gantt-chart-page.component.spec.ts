import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttChartPageComponent } from './gantt-chart-page.component';

describe('GanttChartPageComponent', () => {
  let component: GanttChartPageComponent;
  let fixture: ComponentFixture<GanttChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttChartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
