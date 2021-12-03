import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

import { HomePageComponent } from './home-page/home-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component'
import { CalendarPageComponent } from './calendar-page/calendar-page.component'
import { UpdateProjectPageComponent } from './update-project-page/update-project-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'create-project', component: CreateProjectPageComponent, canActivate: [AuthGuard]},
    { path: 'calendar', component: CalendarPageComponent },
    { path: 'update-project', component: UpdateProjectPageComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginPageComponent},
];

export const appRoutingModule = RouterModule.forRoot(routes);