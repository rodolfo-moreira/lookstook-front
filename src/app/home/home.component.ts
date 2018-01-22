import { Component, OnInit } from '@angular/core';
import { ProductDayService } from './productDay.service';
import { ProductDay } from './ProductDay';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductDayService, ProductsService]
})
export class HomeComponent implements OnInit {

  private productDay : Object;
  private lastProduct : Object;

  constructor( private productDayService: ProductDayService, private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = 'none';
        document.getElementById("container").style.display = 'block';
    }.bind(this), 1500);

    this.getProductDay();
    this.getLastProduct();
  }

  getProductDay(){
    this.productDayService.findAll().subscribe(
      productDay => {
        this.productDay = productDay.id_product;
      },
      err => {
        console.log(err);
      }
    );
  }

  getLastProduct(){
    this.productsService.lastProduct().subscribe(
      lastProduct => {
        let lp = new Array();
        lp.push(lastProduct);
        this.lastProduct = lp;        
      },
      err => {
        console.log(err);
      }
    );
  }

}
