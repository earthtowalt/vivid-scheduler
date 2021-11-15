import { Component, OnInit } from '@angular/core';
import { Project } from '../models/data-models'; 
import { ProjectService } from '../services/project.service';

interface CompletedEvents {
  pname:string;
  url:string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  projects: Project[];
  baseURL: String = 'https://www.youtube.com/embed/';

  completedEvents: CompletedEvents[] = [];

  constructor(
    private _ProjectService:ProjectService
  ) { 
  
  }

  ngOnInit(): void {
    this.getProjects();
  }

   //Retrieves the projdata from the DB and populates them into an array of events
   getProjects(){
    this._ProjectService.getProjects().subscribe(
      response => {
        this.projects = response;

        console.log(response);
        for (let x of this.projects){
          if (x.completed == "Yes"){
            let newUrl = x.url.substring(32)
            //Adding onto our array of events
            this.completedEvents = [
              ...this.completedEvents, {
                pname: x.pname,
                url: this.baseURL + newUrl           
              }
            ]
            console.log(this.completedEvents[0].url)

          }
        } 
      }
    );
    console.log(this.completedEvents)
  }

}

