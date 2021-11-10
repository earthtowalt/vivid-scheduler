import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { appRoutingModule } from './app.routing';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './home-page/home-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { UpdateProjectPageComponent } from './update-project-page/update-project-page.component';
import { DisplayProjectPageComponent } from './display-project-page/display-project-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateProjectPageComponent,
    CalendarPageComponent,
    UpdateProjectPageComponent,
    DisplayProjectPageComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
