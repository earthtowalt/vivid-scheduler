import { Component, OnInit } from '@angular/core';
import { Checkpoint, Project } from '../models/data-models';
import { ProjectService } from '../services/project.service';
<<<<<<< HEAD
<<<<<<< HEAD
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
=======
>>>>>>> populating dropdown list
=======
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
>>>>>>> update project page modal created



@Component({
  selector: 'app-update-project-page',
  templateUrl: './update-project-page.component.html',
  styleUrls: ['./update-project-page.component.css']
})

export class UpdateProjectPageComponent implements OnInit {

<<<<<<< HEAD
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
=======
  submitted: boolean;

  projects: Observable<Project[]>;
>>>>>>> update project page modal created

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
<<<<<<< HEAD
    );
>>>>>>> populating dropdown list
=======
    }, (reason) => {
      // if the modal is closed unexpectedly
    });
>>>>>>> update project page modal created
  }

  // onSubmit to 
  onSubmit(data: any) {
    this.submitted = true;
    console.log("submitted: " + JSON.stringify(data));
    alert("submitted: " + JSON.stringify(data));
  }

}
