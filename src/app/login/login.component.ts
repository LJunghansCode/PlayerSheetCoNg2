import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { LoginService } from './../services/login/login.service';
import { UiGlobalService } from './../services/ui/ui-global.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { slideLeftAnimation } from './../_animations/slideBotAnim';
import { fadeInAnimation } from './../_animations/fadeAnim';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [slideLeftAnimation, fadeInAnimation]
})
export class LoginComponent implements OnInit {
  formMessage: string;


  public loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required] ],
    password: ['', [Validators.required ] ]
  });
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private uiService: UiGlobalService) { }

  ngOnInit() {
  }
  loginUser(event) {
    const FIELD = this.loginForm.value;
    // if (!FIELD.email) {
    //   this.formMessage = 'Please enter an email';
    // } else if (!FIELD.password) {
    //   this.formMessage = 'Please enter a password';
    // } else {
      this.loginService.loginUser(FIELD)
        .subscribe(
          (user) => {
            if (user) {
            this.loginService.updateUser(user);
            this.formMessage = 'Thanks, you logged in!';
            this.uiService.toggleModalLog();
            this.router.navigateByUrl('/player-dashboard');
            window.location.reload();
          }
        },
        (error) => {
          this.formMessage = 'Something went wrong, please try again!';
        });
    // }
  }
  toggleField(field) {
    console.log(field);
  }
}
