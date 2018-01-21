import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/Product';
import { ActivatedRoute, Router } from '@angular/router';
ActivatedRoute

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
  providers: [ProductsService]
})
export class RegisterProductComponent implements OnInit, OnDestroy {

  id: number;
  product: Product;

  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy(): void {
  }

  onSubmit(){
    if (this.productForm.valid) {
 
        let product: Product = new Product(null,
        this.productForm.controls['title'].value,        
        this.productForm.controls['description'].value);
        this.productsService.saveProduct(product).subscribe();
        //console.log(product);

    }
      this.productForm.reset();
      this.router.navigate(['/products']);
  }

}
