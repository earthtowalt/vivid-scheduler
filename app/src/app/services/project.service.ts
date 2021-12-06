import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/data-models';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  rootURL: string = 'http://localhost:4200/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // retrieve projects from server
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.rootURL + 'api/projects');
  }
  // send project submission to server   
  addProject(project: Project) {
    return this.http.post<any>(this.rootURL+"api/project", project);
  }

  // update project in server
  updateProject(projectName: any) {
    return this.http.put<any>(this.rootURL + 'api/project', projectName);
  }

  // actually update a project....
  changeProject(project: Project) {
    return this.http.put<any>(this.rootURL + 'api/update-project', project);
  }
}
