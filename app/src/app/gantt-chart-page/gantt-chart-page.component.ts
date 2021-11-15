import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttEditorComponent, GanttEditorOptions } from 'ng-gantt';

@Component({
  selector: 'app-gantt-chart-page',
  templateUrl: './gantt-chart-page.component.html',
  styleUrls: ['./gantt-chart-page.component.css'],
})
export class GanttChartPageComponent implements OnInit {
  public editorOptions: GanttEditorOptions;
  public data: any;
  @ViewChild(GanttEditorComponent, { static: true })
  editor: GanttEditorComponent;

  constructor() {
    this.editorOptions = new GanttEditorOptions();
    this.data = [
      {
        pID: 1,
        pName: 'Black',
        pStart: '2021-11-01',
        pEnd: '2021-11-30',
        pClass: 'ggroupblack',
        pLink: '',
        pMile: 0,
        pRes: 'Brian',
        pComp: 0,
        pGroup: 1,
        pParent: 0,
        pOpen: 1,
        pDepend: '',
        pCaption: '',
        pNotes: 'Some Notes text',
      },
      {
        pID: 2,
        pName: 'Black',
        pStart: '2021-11-17',
        pEnd: '2021-11-20',
        pClass: 'ggroupblack',
        pLink: '',
        pMile: 0,
        pRes: 'Brian',
        pComp: 0,
        pGroup: 0,
        pParent: 1,
        pOpen: 1,
        pDepend: '',
        pCaption: '',
        pNotes: 'Some Notes text',
      },
      {
        pID: 3,
        pName: 'Child',
        pStart: '2021-11-17',
        pEnd: '2021-11-20',
        pClass: 'ggroupblack',
        pLink: '',
        pMile: 0,
        pRes: 'Brian',
        pComp: 0,
        pGroup: 0,
        pParent: 1,
        pOpen: 1,
        pDepend: '',
        pCaption: '',
        pNotes: 'Some Notes text',
      },
    ];
  }

  ngOnInit(): void {
    this.editorOptions = {
      vEditable: true,
    };
  }
}
