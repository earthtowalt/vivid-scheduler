import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  loggedIn: boolean = false;
  constructor(private router: Router) {}
  ngOnInit() {
    this.loggedIn = sessionStorage.getItem('LogIn') === 'true';
  }
  logOut() {
    sessionStorage.setItem('LogIn', JSON.stringify(false));
    this.loggedIn = false;
    this.router.navigate(['/']);
  }
}
