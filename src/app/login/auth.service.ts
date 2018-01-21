import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private userAuth : boolean = false;

  //showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login( user: User){

    if(user.name === 'rodolfo@gmail.com' && user.password === '123456'){
      
      this.userAuth = true;

      //this.showMenuEmitter.emit(true);

      this.router.navigate(['/']);

    }else{

      this.userAuth = false;

      //this.showMenuEmitter.emit(false);

      console.log('login erro');

    }

  }

  authenticatedUser(){
    return this.userAuth;
  }

}
