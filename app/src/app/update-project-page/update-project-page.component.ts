import { Component, OnInit } from '@angular/core';
import { Checkpoint, Project } from '../models/data-models';
import { ProjectService } from '../services/project.service';



@Component({
  selector: 'app-update-project-page',
  templateUrl: './update-project-page.component.html',
  styleUrls: ['./update-project-page.component.css']
})

export class UpdateProjectPageComponent implements OnInit {

  projects: Project[];

  selectedProject: Project;

  constructor(private _ProjectService: ProjectService) { }

  ngOnInit(): void {
    //this._ProjectService.getProjects();
    this.bindDropdown();
  }

  bindDropdown() {
    this._ProjectService.getProjects().subscribe(
      response => {
        this.projects = response;
        console.log(response);
        
      }
    );
  }


}
