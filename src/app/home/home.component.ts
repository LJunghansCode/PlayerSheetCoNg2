import { Component, OnInit } from '@angular/core';
import { UiGlobalService } from './../services/ui/ui-global.service';
import { LoginService } from './../services/login/login.service';
import { slideRightAnimation} from './../_animations/slideRightAnim';
import { slideTopAnimation } from './../_animations/slideTopAnim';
import { User } from './../../models/user'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [slideRightAnimation, slideTopAnimation]
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(public uiService: UiGlobalService, private loginService: LoginService) { }
  ngOnInit() {
    this.loginService._currentUser
      .subscribe(
        (user) => {
          if (user && user !== undefined) {
            this.user = user.user;
          }
        },
        (error) => {
          console.error(error)
        }
      );
  }
  toggleModal() {
    this.uiService.toggleModal();
  }
}
