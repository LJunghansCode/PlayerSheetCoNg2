import { Component, OnInit } from '@angular/core';
import { UiGlobalService } from './../ui-global.service';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { fadeInAnimation } from './../_animations/fadeAnim';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [fadeInAnimation]
})
export class NavbarComponent implements OnInit {
  loginModal: boolean;
  userLoggedIn: boolean;
  userDetails: {};
  loggedIn = false;

  constructor(private uiService: UiGlobalService, private loginService: LoginService, private route: Router) { }
  private genLoggedInDetails(user) {
    const userDetails = {'email': '', 'userName': ''};
    userDetails.email = user.email;
    userDetails.userName = user.userName;
    this.userDetails = userDetails;
  }
  ngOnInit() {
    this.loginService.loggedInCheck();
    this.loginService._currentUser
      .subscribe(
        (user) => {
          if (user) {
            this.genLoggedInDetails(user.user);
            this.loggedIn = true;
          } else {
          }
        },
        (error) => {
          this.loggedIn = false;
        },
        () => {
        }
      );
  }
  logOutCurrent() {
    this.loginService.logOutCurrent();
    this.route.navigateByUrl('/home');
    window.location.reload();
  }
  toggleModalLog() {
    this.uiService.toggleModalLog();
  }
  ifActiveLog() {
    return this.uiService.ifActiveLog();
}
  checkRegStats() {
   return this.uiService.ifActiveReg();
  }
  toggleModal() {
    this.uiService.toggleModal();
  }
  ifPlayer() {
    if (this.loggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
