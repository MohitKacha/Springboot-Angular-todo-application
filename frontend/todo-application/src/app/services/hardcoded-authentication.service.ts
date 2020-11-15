import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){

    if(username && password){
      sessionStorage.setItem("authenticate",username);
      return true;
    }

    return false;
  }

  isUserLogin(){
    let user = sessionStorage.getItem("authenticate");

    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem("authenticate");
  }
}
