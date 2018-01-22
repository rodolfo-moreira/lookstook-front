import { Injectable } from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ProductsComponent } from './products.component';
import { Product } from './Product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService {

  private _url = 'http://127.0.0.1:8000/products';
  private _url2 = 'http://127.0.0.1:8000/lastProduct';
  private sub: any;

  constructor(private _http: Http) { }

  findAll():Observable<Product>{

    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(localStorage.email + ":" + localStorage.password)); 
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");  

    return this._http.get(this._url, {headers} )
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveProduct(product: Product):Observable<Product>{

    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(localStorage.email + ":" + localStorage.password)); 
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    return this._http.post(this._url, product, {headers})
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Product> {

    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(localStorage.email + ":" + localStorage.password)); 
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    return this._http.get(this._url + '/' + id, {headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  updateProduct(id: number, product: Product): Observable<Product> {

    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(localStorage.email + ":" + localStorage.password)); 
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    return this._http.put(this._url + '/' + id, product, {headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteProductById(id: number): Observable<boolean> {

    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(localStorage.email + ":" + localStorage.password)); 
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    return this._http.delete(this._url + '/' + id, {headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  lastProduct():Observable<Product>{

    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(localStorage.email + ":" + localStorage.password)); 
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");  

    return this._http.get(this._url2, {headers} )
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
