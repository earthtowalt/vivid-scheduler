import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { FormsModule } from '@angular/forms';
import { CreateProjectService } from '../create-project.service';

@Component({
  selector: 'app-create-project-page',
  templateUrl: './create-project-page.component.html',
  styleUrls: ['./create-project-page.component.css']
})
export class CreateProjectPageComponent implements OnInit {

  constructor(private _createProjectService: CreateProjectService) { }

  ngOnInit(): void {
  }
  types = ['Instagram Reel', 'Youtube Video', 'Tiktok', 'Other'];
  currentTime = new Date()
  projectModel = new Project(1, '', '', '', this.currentTime, [this.currentTime, new Date(this.currentTime.getDate() + 12096e5)], '');

  submitted = false;

  onSubmit(data: any) {
    this.submitted = true; 

    alert('SUCCESS: ' + this.projectModel.title + 'created')
    // create checkpoint list based on startDate input, 2 week increment
    this.projectModel.checkPoints = [this.projectModel.startDate, new Date(this.projectModel.startDate.getDate() + 12096e5)]

    // register the new project to server
    this._createProjectService.addProject(this.projectModel)
    .subscribe(
      data => console.log(data)
    )
  }

}

