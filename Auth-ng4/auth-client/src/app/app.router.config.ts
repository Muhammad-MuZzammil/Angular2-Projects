import { Routes } from '@angular/router';

import { LoginComponent } from './AuthModule/components/login/login.component';
import { RegisterComponent } from './AuthModule/components/register/register.component';

export const authRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
