import { RouterConfig, provideRouter } from '@angular/router'
import { tempVarComponent } from '../components/template_variables/template_variables'

import { AppComponent } from '../components/app/app'
import { ArrComponent } from '../components/arrays/arrays'
import { parentChildComponent } from '../components/parentChild/parent'
import { parentComponent } from '../components/TreeComp/ParentComp'

import { parentCompo } from '../components/childInput/parentComp'
import { ParentPairCompo } from '../components/componentList/parentPairComp'

import { bindPropComponent } from '../components/binding_properties/binding_properties'
import { EventComponent } from '../components/events/events'
import { ReusableComponent } from '../components/reusableComp/reusableComp'
import { multipleComponent } from '../components/MultipleSteps/mutipleSteps'



ReusableComponent

export const routes: RouterConfig = [
    
    {
        path:'',
        redirectTo:'/template_variables',
        pathMatch:'full'      
    },

    {
        path: 'template_variables',
        component: tempVarComponent
    },
    
    {
        path:'arrays',
        component:ArrComponent
    },
    
    {
        path:'bindProp',
        component:bindPropComponent
    },
     {
        path:'events',
        component:EventComponent
    },
    {
        path:'parentChild',
        component:parentChildComponent
    },
     {
        path:'TreeComp',
        component:parentComponent
    },
    {
        path:'childInput',
        component:parentCompo
    },
     {
        path:'componentList',
        component:ParentPairCompo
    },
  {
        path:'reusableComp',
        component:ReusableComponent
    },
     {
        path:'multipleSteps',
        component:multipleComponent
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
