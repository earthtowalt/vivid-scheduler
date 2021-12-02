import { Component, OnInit } from '@angular/core';
import { Checkpoint, Project } from '../models/data-models';
import { ProjectService } from '../services/project.service';
<<<<<<< HEAD
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
=======
>>>>>>> populating dropdown list



@Component({
  selector: 'app-update-project-page',
  templateUrl: './update-project-page.component.html',
  styleUrls: ['./update-project-page.component.css']
})

export class UpdateProjectPageComponent implements OnInit {

<<<<<<< HEAD
  submitted: boolean;

  projects: Observable<Project[]>;

  selectedProject: Project;

  // available project types
  types = ['Instagram Reel', 'Youtube Video', 'TikTok', 'Other'];

  constructor(private _ProjectService: ProjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    //this._ProjectService.getProjects();
    this.bindSelectProjectDropdown();
  }

  // bind the select project dropdown
  bindSelectProjectDropdown() {
    this.projects = this._ProjectService.getProjects();
  }

  // when selection is made, pop up 

  open(content: any, selectedProject: Project) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-update-title'}).result.then((result) => {
      if (result === 'save') {

        alert('project sucessfully updated.');
      }
    }, (reason) => {
      // if the modal is closed unexpectedly
    });
  }

  // onSubmit to 
  onSubmit(data: any) {
    this.submitted = true;
    console.log("submitted: " + JSON.stringify(data));
    alert("submitted: " + JSON.stringify(data));
=======
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
>>>>>>> populating dropdown list
  }


}
