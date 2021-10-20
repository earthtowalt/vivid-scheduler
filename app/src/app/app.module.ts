import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { appRoutingModule } from './app.routing';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateProjectPageComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
