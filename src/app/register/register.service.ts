import { Injectable } from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Register } from './Register';

@Injectable()
export class RegisterService {

    private _url = 'http://127.0.0.1:8000/createUser';
    private sub: any;

    constructor(private _http: Http) { }

    saveRegister(register: Register):Observable<Register>{

        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(localStorage.email + ":" + localStorage.password)); 
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        return this._http.post(this._url, register, {headers})
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}