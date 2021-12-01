import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  password: string = "";
  validPassword: string = "p";

  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('LogIn', JSON.stringify(false));
  }

  onSubmit(data: any) {
    
    console.log(data.password);
    if(data.password === this.validPassword){
      sessionStorage.setItem('LogIn', JSON.stringify(true));
      this.router.navigate(['/']);
    } else {
      // error message
      alert('ERROR: Incorrect Password');
    }
    
  }

}
