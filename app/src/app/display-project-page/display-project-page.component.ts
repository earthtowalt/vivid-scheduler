import { Component, OnInit } from '@angular/core';
import { Project } from '../models/data-models';
import { ProjectService } from '../services/project.service';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-display-project-page',
  templateUrl: './display-project-page.component.html',
  styleUrls: ['./display-project-page.component.css']
})
export class DisplayProjectPageComponent implements OnInit {
  
  projects: Array<String>;
  newProject: Project;

  constructor(
    private _ProjectService: ProjectService,
    private _EventEmitterService: EventEmitterService) { 

    this.projects = [];
    this._ProjectService.getProjects().subscribe(
      response => {
        console.log(response);
        // add project names into projects list
        for (let x of response){
          this.projects.push(x.title);
        } 
      }
    );

    this.newProject = new Project(0, '', '', '', new Date(), [], '');
  }

  ngOnInit(): void {
  }

  onSubmit(data:any) {
    console.log('project submitted for display!', data);
    this._EventEmitterService.onDisplayNewProjectClick(data);
    // call function that adds project to the list of projects in home page
  }

}
