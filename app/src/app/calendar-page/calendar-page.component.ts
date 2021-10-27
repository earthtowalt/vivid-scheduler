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

  users: any[] = [];

  getAllProjects() {
    console.log(this.projectService.getProjects());
  }

  ngOnInit(): void {
    // this.getAllProjects();
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
      start: startOfDay(new Date()),
      title: 'First Event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    },
  ];
}
