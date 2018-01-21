import { Injectable } from '@angular/core';

import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ProductsComponent } from './products.component';
import { Product } from './Product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService {

  private _url = 'http://127.0.0.1:8000/products'

  constructor(private _http: Http) { }

  findAll():Observable<Product>{
    return this._http.get(this._url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveProduct(product: Product):Observable<Product>{
    return this._http.post(this._url, product)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
