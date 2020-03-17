import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService implements CanActivate {

  isLoggedin = false;
  constructor(private loginSer : HttpClient,
              private router1: Router) { }
  canActivate( rou: ActivatedRouteSnapshot): boolean{
    if(this.isLoggedin == false){
      alert("must login");
      this.router1.navigateByUrl("/");
    }
    return this.isLoggedin;
  }
}