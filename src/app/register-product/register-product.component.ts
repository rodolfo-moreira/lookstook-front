import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/Product';
import { ActivatedRoute, Router } from '@angular/router';

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

    setTimeout(function() {
        document.getElementById("preloader").style.display = 'none';
        document.getElementById("container").style.display = 'block';
    }.bind(this), 1500);

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
          let update = this.productsService.updateProduct(this.id,productJson).subscribe(response => {

            console.log(response);

            alert('Editado com sucesso');

          }, error => {

            alert('Você precisa ser o autor do item para exclui-lo');

          });          

      }else{

          let product: Product = new Product(null,
          this.productForm.controls['title'].value,        
          this.productForm.controls['description'].value);
          delete product.id;
          let productString = JSON.stringify(product);
          let productJson = JSON.parse(productString);
          this.productsService.saveProduct(productJson).subscribe(response => {

            console.log(response);

            alert('Criado com sucesso');

          }, error => {

            alert('Erro na api, por favor tente mais tarde');

          });        

      }
 
        

    }
      this.productForm.reset();
      this.router.navigate(['/products']);
  }

}
