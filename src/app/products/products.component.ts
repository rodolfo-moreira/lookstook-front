import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  private products : Product;

  constructor( private productService: ProductsService) { }

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
      //this.router.navigate(['/user/edit', user.id]);
    }
  }
 
  deleteProduct(product: Product) {
    console.log('Delete product');
  }


}
