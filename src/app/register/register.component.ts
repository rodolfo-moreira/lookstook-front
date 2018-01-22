import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Product } from '../products/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from './Register';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  register : Register;

  registerForm: FormGroup;
  private sub: any;
  public edited = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService) { }

    ngOnInit() {

 
      setTimeout(function() {
          console.log('teste timeout');
          document.getElementById("preloader").style.display = 'none';
          document.getElementById("container").style.display = 'block';
      }.bind(this), 1500);

    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    
  }

  
  onSubmit(){
    if (this.registerForm.valid) {    

          let register: Register = new Register(
          this.registerForm.controls['name'].value,        
          this.registerForm.controls['email'].value,
          this.registerForm.controls['password'].value);
          
          let registerString = JSON.stringify(register);
          let registerJson = JSON.parse(registerString);
          this.registerService.saveRegister(registerJson).subscribe();

    }
      this.registerForm.reset();
      this.router.navigate(['/login']);
  }
}
