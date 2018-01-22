import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductsService } from './products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  private products : Product;

  constructor( private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.findAll().subscribe(
      products => {
        this.products = products;
      },
      err => {
        console.log(err);
      }
    );
  }

  editProductPage(product: Product) {
    if (product) {
      console.log(product);
      this.router.navigate(['/editProduct/', product.id]);
    }
  }


  deleteProduct(product: Product) {
    if (product) {
      this.productService.deleteProductById(product.id).subscribe(
        res => {
          this.getAllProducts();
          this.router.navigate(['/products']);
          console.log('done');
        }
      );
    }
  }


}
