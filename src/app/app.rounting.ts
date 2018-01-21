import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterProductComponent } from './register-product/register-product.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './products/products.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'forgot', component: ForgotComponent},
    { path: 'registerProduct', component: RegisterProductComponent, canActivate:[AuthGuard]},
    { path: 'products', component: ProductsComponent, canActivate:[AuthGuard]}
];

export const rounting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);