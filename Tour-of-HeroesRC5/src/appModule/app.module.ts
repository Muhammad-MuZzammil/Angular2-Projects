import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../heroDetail/hero-detail.component';
import { HeroService } from '../services/hero.service';
import { HeroesComponent } from '../Heroes/hero.component';
import { routing } from '../app/app.routing';
import { DashboardComponent } from '../DashBoard/dashboard.component';
    

import { AppComponent } from '../app/app.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
              ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent ,
        DashboardComponent,
        HeroDetailComponent
        ],
        providers:[HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {

}