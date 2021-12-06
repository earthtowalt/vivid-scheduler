import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttEditorComponent, GanttEditorOptions } from 'ng-gantt';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../models/data-models';

interface ganttProject {
  pID: Number;
  pName: String;
  pStart: String;
  pEnd: String;
  pClass: String;
  pLink: String;
  pMile: Number;
  pRes: String;
  pComp: Number;
  pGroup: Number;
  pParent: Number;
  pOpen: Number;
  pDepend: String;
  pCaption: String;
  pNotes: String;
}

@Component({
  selector: 'app-gantt-chart-page',
  templateUrl: './gantt-chart-page.component.html',
  styleUrls: ['./gantt-chart-page.component.css'],
})
export class GanttChartPageComponent implements OnInit {
  public editorOptions: GanttEditorOptions;
  public data: ganttProject[] = [];
  public projects: any;
  @ViewChild(GanttEditorComponent, { static: true })
  editor: GanttEditorComponent;

  constructor(private _ProjectService: ProjectService,
              public router: Router) {
    this.editorOptions = new GanttEditorOptions();
    this._ProjectService.getProjects().subscribe(
      response => {
        this.projects = response;
        let id = 1;
        for (let x of this.projects){
          if (x.pcompleted === 'No') {
            this.data = [
              ...this.data, {
                pID: id,
                pName: x.pname,
                pStart: x.pstartDate,
                pEnd: x.pstartDate,
                pClass: 'ggroupblack',
                pLink: '',
                pMile: 0,
                pRes: x.powner,
                pComp: 0,
                pGroup: 1,
                pParent: 0, 
                pOpen: 1,
                pDepend: '',
                pCaption: '',
                pNotes: 'This project is a ' + x.ptype + '. ' + x.pdescription,
              }
            ]
  
            let parent = id
            for (var i = 0; i < x.pcheckpoints.length; ++i) {
              let checkpoint = x.pcheckpoints[i]
              let nextCheckpoint = x.pcheckpoints[i+1]
              let style = 'gtaskblue'
              if (i == x.pcheckpoints.length - 1) {
                nextCheckpoint = x.pcheckpoints[i]
                style = 'gtaskred'
              }
              id = id + 1
              this.data = [
                ...this.data, {
                  pID: id,
                  pName: x.pname + ' ' + checkpoint.cname,
                  pStart: checkpoint.cdate,
                  pEnd: nextCheckpoint.cdate,
                  pClass: style,
                  pLink: '',
                  pMile: 0,
                  pRes: x.powner,
                  pComp: 0,
                  pGroup: 0,
                  pParent: parent, 
                  pOpen: 1,
                  pDepend: '',
                  pCaption: '',
                  pNotes: x.pdescription,
                }
              ];
            }
      
            id = id + 1
          }
        }
        console.log(this.data);
    });
  }

  ngOnInit(): void {
    this.editorOptions = {
      vEditable: true,
      vCaptionType: 'complete',
      vEventsChange: {
        taskname: () => {
          console.log("taskname");
        }
      }
    };
  }

}
