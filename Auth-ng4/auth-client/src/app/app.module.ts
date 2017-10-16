import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { authRoutes } from './app.router.config';
import { LoginComponent } from './AuthModule/components/login/login.component';
import { RegisterComponent } from './AuthModule/components/register/register.component';
import { AuthService } from './AuthModule/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(authRoutes),
  ],
  providers: [AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
