import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Player Sheet co.';
  navStatus = '';
  bodyStatus = '';
  loggedIn = false;
  currentLocation: string;

  constructor(private loginService: LoginService, private location: Location) { }
  ngOnInit() {
    // Initial css transition prevention wipe
    setTimeout(function(){
    document.body.className = '';
    }, 1000);
    this.loginService._currentUser
    .subscribe((user) => {
      if (user !== undefined) {
        this.loggedIn = true;
      }
    });

    this.currentLocation = this.location.path();
  }

  logOut() {
    this.loginService.logOutCurrent();
  }
}
