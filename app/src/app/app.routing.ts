import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component'
import { CalendarPageComponent } from './calendar-page/calendar-page.component'



const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'create-project', component: CreateProjectPageComponent },
    { path: 'calendar', component: CalendarPageComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);