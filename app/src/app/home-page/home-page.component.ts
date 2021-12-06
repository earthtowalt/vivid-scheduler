import { Component, OnInit } from '@angular/core';
import { Project } from '../models/data-models'; 
import { ProjectService } from '../services/project.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface CompletedEvents {
  pname:string;
  url:any;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  projects: Project[];
  baseURL: String = 'https://www.youtube.com/embed/';
  currentURL: SafeHtml;

  completedEvents: CompletedEvents[] = [];

  constructor(
    private _ProjectService:ProjectService,
    private _sanitizer: DomSanitizer
  ) { 
  }

  ngOnInit(): void {
    this.getProjects();
  }

  setURL(project: any) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(project.url);
  }

   //Retrieves the projdata from the DB and populates them into an array of events
   getProjects(){
    this._ProjectService.getProjects().subscribe(
      response => {
        this.projects = response;

        console.log(response);
        for (let x of this.projects){
<<<<<<< HEAD
          if (x.completed == "Yes"){
            let newUrl = x.url.substring(33)
=======
          if (x.pcompleted == "Yes"){
            let newUrl = x.purl.substring(32)
>>>>>>> update working. Data is now normalized from frontend to backend. The update page has basic functionality, but needs a way to modify projects.
            //Adding onto our array of events
            this.completedEvents = [
              ...this.completedEvents, {
                pname: x.pname,
                url: this.baseURL + newUrl         
              }
            ]

          }
        } 
      }
    );
  }

}

