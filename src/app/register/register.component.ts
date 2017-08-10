import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../login.service';
import { UiGlobalService } from './../ui-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  formMessage: string;
  regStatus: boolean;
  public registerForm = this.fb.group({
    email: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router, private uiService: UiGlobalService) {  }
  ngOnInit() {
  }
    registerNew(event) {
      const FIELD = this.registerForm.value;
      if (!FIELD.email) {
        this.formMessage = 'Please enter an email!';
      } else if (!FIELD.userName) {
        this.formMessage = 'Please enter a user name!';
      } else if (!FIELD.password) {
        this.formMessage = 'You need a password!';
      } else if (!FIELD.confirmPassword) {
        this.formMessage = 'You forgot to confirm the password';
      } else if (FIELD.confirmPassword !== FIELD.password) {
        this.formMessage = 'Sorry, passwords do not match';
      } else {
        this.loginService.newUser(FIELD)
                         .subscribe(
                           (user) => {
                           if (user) {
                              this.formMessage = 'Thanks, you\'re registered!';
                              this.registerForm.reset();
                              this.uiService.triggerRegSuccess();
                              this.loginAfterRegister(FIELD.email, FIELD.password);
                           }
                         },
                           (error) => {
                              if (error.Message === 'Invalid E-mail') {
                                this.tryUserIfFail(FIELD.email, FIELD.password);
                              } else {
                                this.uiService.triggerRegFailure();
                                this.formMessage = error.Message;
                              }
                         },
                         () => {
                           // User is logged in and service is updated
                         }
                       );
    }
    }
    loginAfterRegister(email, password) {
       this.loginService.loginByCredentials(email, password).subscribe(
         (user) => {
           if (user) {
            this.uiService.triggerRegSuccess();
            this.uiService.toggleModal();
            this.route.navigateByUrl('/player-dashboard');
            window.location.reload();
           }
         }, (error) => {
           this.formMessage = error.Message;
         }
       );
    }
    tryUserIfFail(email, password) {
      this.loginService.loginByCredentials(email, password)
      .subscribe(
        (user) => {
          this.loginService.updateUser(user);
          this.route.navigateByUrl('/player-dashboard');
        }, (error) => {
          this.formMessage = error.Message;
        }
      );
    }
    registerStatus(regStatus) {
      return this.uiService.registerStatus();
    }
}
