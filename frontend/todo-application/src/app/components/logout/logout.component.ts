import { HardcodedAuthenticationService } from './../../services/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticateService : HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.authenticateService.logOut();
  }

}
