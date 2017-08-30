import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Player } from './../../../models/player';
import { User } from './../../../models/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  public newUserUrl = 'api/new_user';
  public loginUrl = 'api/login_user';
  public logInCheckUrl = 'api/get_user';
  public logOutUrl = 'api/logout';
  // Current User Truth
  private currentUserSource = new BehaviorSubject(undefined);
  public _currentUser: Observable<any> = this.currentUserSource.asObservable();

  public updateUser(user) {
    this.currentUserSource.next(user);
  
  }

  constructor(private http: Http) { }
  logOutCurrent() {
    this.http.get(this.logOutUrl, this.options).subscribe();
    this.currentUserSource.next(undefined);
  }
  newUser(userForm: FormData): Observable<User> {
    return this.http.post(this.newUserUrl, { userForm }, this.options)
      .map(this.processData)
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }
  loginUser(loginForm: FormData): Observable<User> {
    return this.http.post(this.loginUrl, { loginForm }, this.options)
      .map(this.processLogin)
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }
  loginByCredentials(email: string, password: string): Observable<User> {
    return this.http.post(this.loginUrl, { email: email, password: password}, this.options)
      .map(this.processData)
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }
  loggedInCheck() {
    this.http.get(this.logInCheckUrl, this.options)
      .map(this.processData)
      .subscribe((user) => {
        if (user) {
          this.currentUserSource.next(user);
        }
      }, (error) => {
        console.error(error.json().Message);
      });
  }
  private processData(res: Response) {
    const body = res.json();
    return body;
  }
  private processLogin(res: Response) {
    const body = res.json();
    return body.user;
  }

}
