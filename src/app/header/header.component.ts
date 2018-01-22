import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { User } from '../login/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user : User;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }


  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);

    this.authService.getLogout().subscribe(
      user => {
        this.user = user;        
      },
      err => {
        console.log(err);
      }
    );

  }

}
