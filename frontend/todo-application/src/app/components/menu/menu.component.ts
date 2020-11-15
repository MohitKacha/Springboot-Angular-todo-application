import { HardcodedAuthenticationService } from './../../services/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogin : boolean =false;
  constructor(private autheticateService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
      if(this.autheticateService.isUserLogin()){
        this.isLogin =true;
      }
  }

}
