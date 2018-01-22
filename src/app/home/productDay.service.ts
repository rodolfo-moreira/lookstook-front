import { Injectable } from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ProductDay } from './ProductDay';

@Injectable()
export class ProductDayService {

  private _url = 'http://127.0.0.1:8000/productDay';
  private sub: any;

  constructor(private _http: Http) { }

  findAll():Observable<ProductDay>{

    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(localStorage.email + ":" + localStorage.password)); 
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");  

    return this._http.get(this._url, {headers} )
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}