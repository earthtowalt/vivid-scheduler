import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPageComponent } from './calendar-page.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CalendarView, CalendarEvent } from 'angular-calendar';

import { CalendarDateFormatter } from 'angular-calendar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import {Pipe, PipeTransform} from '@angular/core';
import { CalendarAngularDateFormatter } from 'angular-calendar';
// import { CalendarDatePipe } from 'angular-calendar/modules/common/calendar-date.pipe';

@Pipe({name: 'calendarDate'})
class MockPipe implements PipeTransform {
    transform(value: number): number {
        // blah blah
        return value;
    }
}


describe('CalendarPageComponent', () => {
  let component: CalendarPageComponent;
  let fixture: ComponentFixture<CalendarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule, 
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory,
        })
      ],
      declarations: [ CalendarPageComponent, MockPipe ] // Should be CalendarPipe
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
