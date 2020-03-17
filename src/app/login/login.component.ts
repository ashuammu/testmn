import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginauthService } from '../loginauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = new FormControl('');
  // password = new FormControl('');

  msg;
  loginstatus;

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  onSubmit() {
    console.log(this.profileForm.value);
    
    if(this.profileForm.controls.email.value == "admin" &&
    this.profileForm.controls.password.value == "manager"){
      this.msg = "success";
      this.loginstatus = true;
      this.looginser.isLoggedin = true;
      this.loginstatus = this.looginser.isLoggedin;


    }
    else{
      this.logout();
      this.looginser.isLoggedin =false;
     
    }
  }

  logout(){
    this.loginstatus = false;
    this.looginser.isLoggedin = false;
  }



  constructor(private looginser : LoginauthService) {
    this.loginstatus = false;
    looginser.isLoggedin = false;
   }

  ngOnInit() {
  }

  // updateName() {
  //   this.profileForm. email.setValue('Nancy');
  // }
}
