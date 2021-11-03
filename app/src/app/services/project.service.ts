import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyProject } from '../models/data-models';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  rootURL: string = '/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // TODO fix this - doesn't work rn
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.rootURL + '/projects');
  }

  addProject(project: any) {
    return this.http.post(this.rootURL + '/project', { project });
  }
}
