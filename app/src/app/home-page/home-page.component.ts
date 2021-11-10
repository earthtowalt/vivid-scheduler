import { Component, OnInit } from '@angular/core';
import { Project } from '../models/data-models';
import { EventEmitterService } from '../services/event-emitter.service';  

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  projects: Array<any>;
  curProject: Project;

  constructor(
    private eventEmitterService: EventEmitterService  
  ) { 
    this.projects = ['project1', 'project2'];
    this.curProject = new Project(0, '', '', '', new Date(), [], '');
  }

  ngOnInit(): void {
    console.log('reached home page component')
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeAddToHomePage.subscribe((newProject:any) => {    
        this.addNewProject(newProject);    
      });    
    } 
  }

  // adds a new project to home page
  // each project contains project name and url video link
  addNewProject(newProject: Project) {
    this.projects.push(newProject.powner)
    console.log(newProject, 'hello')
  }

}

