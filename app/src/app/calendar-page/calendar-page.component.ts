import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult:string;
  projects: Project[];

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Project NCT',
    }
  ]

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal
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
          var projDate = new Date(x.startDate);
          projDate.setHours(0, 0, 0, 0);

          this.events = [
            ...this.events, {
            start: new Date(projDate),
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
  dateClickedOn: Date = new Date();

  setView(view: CalendarView) {
    this.view = view;
  }

  /*
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    //implement some modal to pop up
  }
  */

  //TO DO: Put info about events in here 
  open(content: any, { date, events }: { date: Date; events: CalendarEvent[] }) {
    this.dateClickedOn = date;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
