import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';  

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeAddToHomePage = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onDisplayNewProjectClick(newProject:any) {    
    this.invokeAddToHomePage.emit(newProject);    
  }    
}
