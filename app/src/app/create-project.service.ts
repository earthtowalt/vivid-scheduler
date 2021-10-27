import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  _url = ''
  constructor(private _http: HttpClient) { }

  // make a post request to the server   
  addProject(project: Project) {
    return this._http.post<any>(this._url, project);
  }
}
