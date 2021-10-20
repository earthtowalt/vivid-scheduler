import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component'


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'create-project', component: CreateProjectPageComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);