import { Injectable } from '@angular/core';

import {Http, Response} from '@angular/http';
import { User } from './user';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  private userAuth : boolean = false;  

  private _url = 'http://127.0.0.1:8000/doLogin';
  private _url2 = 'http://127.0.0.1:8000/doLogout';

  constructor(private _http: Http,private router: Router) { }

  getLogin(user: User):Observable<User>{

    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);

    return this._http.post(this._url, user)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getLogout():Observable<User>{
    console.log('entra aqui');
    return this._http.get(this._url2)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  authenticatedUser(){
    return this.userAuth;
  }

  

}
