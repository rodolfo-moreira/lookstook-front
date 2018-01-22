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
        this.userAuth = true;
        localStorage.setItem('userAuth', 'true');
        this.router.navigate(['/']);

      },
      err => {
        console.log(err);
        this.userAuth = false;
        localStorage.setItem('userAuth', 'false');

        alert('Credenciais inválidas');

      }
    );

    //this.authService.getLogin(this.user);
    
  }
}
