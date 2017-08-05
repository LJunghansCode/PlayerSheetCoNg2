import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../login.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  formMessage: string;
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  loginUser(event) {
    const FIELD = this.loginForm.value;
    if (!FIELD.email) {
      this.formMessage = 'Please enter an email';
    } else if (!FIELD.password) {
      this.formMessage = 'Please enter a password!';
    } else {
      this.loginService.loginUser(FIELD)
        .subscribe(
        (user) => {
          if (user) {
            this.formMessage = 'Thanks, you logged in!';
            this.router.navigateByUrl('/player-dashboard');
          }
        },
        (error) => {
          this.formMessage = 'Something went wrong, please try again!';
        },
        () => {
          // User is loaded, trigger any UI events
        });
    }
  }
}
