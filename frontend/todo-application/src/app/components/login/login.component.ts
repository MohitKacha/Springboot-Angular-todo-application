import { HardcodedAuthenticationService } from './../../services/hardcoded-authentication.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail  = "abc"
  userPassword ="abc" 
  errorMessage = " Invalid Credentials"
  invalidLogin = false

  constructor(private router : Router,
            private authenticationService : HardcodedAuthenticationService) {

   }

  ngOnInit(): void {
  }

  onclick(){

    if(this.authenticationService.authenticate(this.userEmail,this.userPassword)){
      this.router.navigate(['welcome', this.userEmail])
    }else{
      this.invalidLogin = true;
    }
   
  }

}
