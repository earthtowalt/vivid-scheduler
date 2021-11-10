import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { Checkpoint, Project } from '../models/data-models';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-display-project-page',
  templateUrl: './display-project-page.component.html',
  styleUrls: ['./display-project-page.component.css']
})
export class DisplayProjectPageComponent implements OnInit {
  
  projects: Array<String>;

  constructor(
    private _ProjectService: ProjectService) { 

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
  }

  ngOnInit(): void {
  }

  onSubmit(data:any) {
    console.log('project submitted for display!', data);
    // call function that adds project to the list of projects in home page
  }

}
