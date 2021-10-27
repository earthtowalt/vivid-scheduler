import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  rootURL = '/api';

  getProjects() {
    return this.http.get(this.rootURL + '/projects');
  }

  addProject(project: any) {
    return this.http.post(this.rootURL + '/project', { project });
  }
}
