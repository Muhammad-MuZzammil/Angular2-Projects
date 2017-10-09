import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CoverComponent } from './app/cover/cover.component'
import { MenuComponent } from './app/menu/menu.component'

import { HandiComponent } from './app/handi/handi.component'
import { SigninComponent } from './app/signin/signin.component'
import { SignupComponent } from './app/signup/signup.component'



const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/cover',
        pathMatch: 'full'
    },
    { path: 'cover', component: CoverComponent },

    { path: 'menu', component: MenuComponent },

    { path: 'handi', component: HandiComponent },


    { path: 'signin', component: SigninComponent },

    { path: 'signup', component: SignupComponent },
    





];
export const appRoutingProviders: any[] = [

]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
