import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user : User = new User();

  private userAuth : boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    setTimeout(function() {
        document.getElementById("preloader").style.display = 'none';
        document.getElementById("container").style.display = 'block';
    }.bind(this), 1500);

  }

  login(){
    this.authService.getLogin(this.user).subscribe(
      
      user => {
        this.user = user;
        console.log('usuario e senhas corretos');     
        
        

        this.userAuth = true;
        localStorage.setItem('userAuth', 'true');
        this.router.navigate(['/']);

      },
      err => {
        console.log(err);
        console.log('usuario e senha errados');

        this.userAuth = false;
        localStorage.setItem('userAuth', 'false');

      }
    );

    //this.authService.getLogin(this.user);
    
  }
}
