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
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    if (this.id) {
      this.productsService.findById(this.id).subscribe(
        product => {
            this.id = product.id;
            this.productForm.patchValue({
            title: product.title,
            description: product.description,
          });
         },error => {
          console.log(error);
         }
      );
 
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit(){
    if (this.productForm.valid) {

      if(this.id){

          let product: Product = new Product(null,
          this.productForm.controls['title'].value,        
          this.productForm.controls['description'].value);
          delete product.id;
          let productString = JSON.stringify(product);
          let productJson = JSON.parse(productString);
          this.productsService.updateProduct(this.id,productJson).subscribe();

      }else{

          let product: Product = new Product(null,
          this.productForm.controls['title'].value,        
          this.productForm.controls['description'].value);
          delete product.id;
          let productString = JSON.stringify(product);
          let productJson = JSON.parse(productString);
          this.productsService.saveProduct(productJson).subscribe();

      }
 
        

    }
      this.productForm.reset();
      this.router.navigate(['/products']);
  }

}
