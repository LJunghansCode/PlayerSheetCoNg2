import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  formMessage: string;
  public registerForm = this.fb.group({
    email: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(public fb: FormBuilder, public loginService: LoginService) {  }
  ngOnInit() {
  }
    doCreate(event) {
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
        this.formMessage = 'Sorry Passwords do not match';
      } else {
        this.loginService.newUser(FIELD)
                         .subscribe(
                           (user) => {
                           if (user) {
                              this.formMessage = 'Thanks, you\'re registered!';
                              this.registerForm.reset();
                           }
                         },
                           (error) => {
                              this.formMessage = 'Sorry, something went wrong, please try again';
                         }
                       );
    }
    }
}
