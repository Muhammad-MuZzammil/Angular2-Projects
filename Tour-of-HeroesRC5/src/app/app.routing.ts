import { Routes, RouterModule } from '@angular/router'
import { HeroesComponent } from '../Heroes/hero.component'
import { HeroDetailComponent } from '../heroDetail/hero-detail.component'
import { DashboardComponent } from '../DashBoard/dashboard.component'

const appRoutes: Routes = [
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
  path: 'detail/:id',
  component: HeroDetailComponent
},
    {
        path: 'dashboard',
        component: DashboardComponent
    },
   
]

export const routing = RouterModule.forRoot(appRoutes);
