import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component'
import { UpdateProjectPageComponent } from './update-project-page/update-project-page.component';
import { GanttChartPageComponent } from './gantt-chart-page/gantt-chart-page.component';
import { DisplayProjectPageComponent } from './display-project-page/display-project-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'create-project', component: CreateProjectPageComponent},
  { path: 'calendar', component: CalendarPageComponent},
  { path: 'update-project', component: UpdateProjectPageComponent},
  { path: 'gantt-chart', component: GanttChartPageComponent},
  { path: 'display-project', component: DisplayProjectPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
