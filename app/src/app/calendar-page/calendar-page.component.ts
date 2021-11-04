import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css'],
})
export class CalendarPageComponent implements OnInit {
  /*
  constructor(private projectService: ProjectService) {}
  // TODO fix this - it doesn't work rn
  projects: any = [];
  getAllProjects() {
      return this.projectService.getProjects().subscribe((data: {}) => {
        this.projects = data;
      });
//observable
  }
  */

  projects: Project[];

  events: CalendarEvent[] = [

    {
      start: startOfDay(new Date()),
      title: 'Project NCT',
    }
  ]

  constructor(
    private httpClient: HttpClient
  ) { }
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.httpClient.get<any>('http://localhost:4200/api/projects').subscribe(
      response => {
        console.log(response);
        this.projects = response;
        for (let x of this.projects){
          this.events = [
            ...this.events, {
            start: new Date(x.startDate),
            title: x.title
            }
          ]
        }
      }
    );
  }


  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date)
    //implement some modal to pop up
  }



}
