import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
    { path: 'home', component: HomePageComponent },
];

export const appRoutingModule = RouterModule.forRoot(routes);