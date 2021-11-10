import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  projects: Array<any>;

  constructor() { 
    this.projects = [];
  }

  ngOnInit(): void {
  }

  // adds a new project to home page
  // each project contains project name and url video link
  addNewProject(newProject: any) {
    this.projects.push(newProject)
  }

}

