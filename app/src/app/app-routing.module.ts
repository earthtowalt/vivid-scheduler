import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { CalendarPageComponent } from './calendar-page/calendar-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'calendar', component: CalendarPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
