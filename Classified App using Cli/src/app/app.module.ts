/// <reference path="../../node_modules/firebase/firebase.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AngularFireModule,AuthProviders,AuthMethods } from 'angularfire2';

   import { routing, appRoutingProviders } from '../router'

  import { AuthService  } from '../services/auth.service';



import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { HandiComponent } from './handi/handi.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MenuComponent } from './menu/menu.component';

const firebaseConfig = {
apiKey: "AIzaSyBd0lOta60CwnFSAUanMb0EL5XIqU_X_ic",
    authDomain: "restaurant-app-da9f8.firebaseapp.com",
    databaseURL: "https://restaurant-app-da9f8.firebaseio.com",
    storageBucket: "restaurant-app-da9f8.appspot.com",
    messagingSenderId: "459789218502"

};

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    HandiComponent,
    SignupComponent,
    SigninComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, 
    routing,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
  ],
  providers: [appRoutingProviders,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
