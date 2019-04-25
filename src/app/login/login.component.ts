import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPanel: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  signUp(){
    this.showPanel = true;
  }
  signIn(){
    this.showPanel = false;
  }
  loggedIn(){
    localStorage.setItem('isLoggedin', 'true');
  }

}
