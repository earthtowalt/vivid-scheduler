import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-create-project-page',
  templateUrl: './create-project-page.component.html',
  styleUrls: ['./create-project-page.component.css']
})
export class CreateProjectPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  types = ['Instagram Reel', 'Youtube Video', 'Tiktok', 'Other'];

  model = new Project(1, 'Project 1', 'Dancer 1', 'Instagram Reel', new Date, 'sample description');

  submitted = false;

  onSubmit() { this.submitted = true; }

}

