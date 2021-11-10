import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component'
import { CalendarPageComponent } from './calendar-page/calendar-page.component'
import { UpdateProjectPageComponent } from './update-project-page/update-project-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'create-project', component: CreateProjectPageComponent },
    { path: 'calendar', component: CalendarPageComponent },
    { path: 'update-project', component: UpdateProjectPageComponent},
];

export const appRoutingModule = RouterModule.forRoot(routes);