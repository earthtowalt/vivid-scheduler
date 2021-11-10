import { Component, OnInit } from '@angular/core';
import { Project } from '../models/data-models'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(
  ) { 
  
  }

  ngOnInit(): void {

  }

  // adds a new project to home page
  // each project contains project name and url video link
  addNewProject() {

  }

}

