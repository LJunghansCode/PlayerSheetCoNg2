import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Player } from './../models/player';
import { User } from './../models/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  public currUser: User = undefined;
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  public newUserUrl = 'api/new_user';
  public loginUrl = 'api/login_user';
  public logInCheckUrl = 'api/get_user';
  public logOutUrl = 'api/logout';
  // Current User Truth
  private currentUserSource = new BehaviorSubject(undefined);
  public _currentUser: Observable<any> = this.currentUserSource.asObservable();

  constructor(private http: Http) { }
  logOutCurrent() {
    this.http.get(this.logOutUrl, this.options).subscribe();
    this.currentUserSource.complete();
  }
  newUser(userForm: FormData): Observable<User> {
    return this.http.post(this.newUserUrl, { userForm }, this.options)
      .map(this.processData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  loginUser(loginForm: FormData): Observable<User> {
    return this.http.post(this.loginUrl, { loginForm }, this.options)
      .map(this.processData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  loggedInCheck() {
    this.http.get(this.logInCheckUrl, this.options)
      .map(this.processData)
      .subscribe((user) => {
        this.currentUserSource.next(user);
      }, (error) => {
        this.currentUserSource.unsubscribe()
      });
  }
  private processData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
