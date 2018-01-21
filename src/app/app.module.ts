import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { HomeComponent } from './home/home.component';
import { rounting } from './app.rounting';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ForgotComponent,
    RegisterComponent,
    RegisterProductComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    rounting
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
