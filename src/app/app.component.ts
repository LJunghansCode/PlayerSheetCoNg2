import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

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
  constructor(private loginService: LoginService) { }
  ngOnInit() {
    this.loginService._currentUser
    .subscribe((user) => {
      if (user !== undefined) {
        this.loggedIn = true;
      }
    });
  }

  openNav() {
    this.navStatus = 'is-open';
    this.bodyStatus = 'nav-open';
  }
  closeNav() {
    this.bodyStatus = '';
    this.navStatus = '';
  }
  logOut() {
    this.loginService.logOutCurrent();
  }
}
