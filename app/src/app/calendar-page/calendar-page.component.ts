import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css'],
})
export class CalendarPageComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  // TODO fix this - it doesn't work rn
  projects: any = [];
  getAllProjects() {
      return this.projectService.getProjects().subscribe((data: {}) => {
        this.projects = data;
      });

  }

  ngOnInit(): void {
  }

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //implement some modal to pop up
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date('October 15, 2021')),
      title: 'First Event',
    },
    {
      start: startOfDay(new Date('October 29, 2021')),
      title: 'Second event',
    },
  ];
}
