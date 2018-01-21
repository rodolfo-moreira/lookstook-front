import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'forgot', component: ForgotComponent}
];

export const rounting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);