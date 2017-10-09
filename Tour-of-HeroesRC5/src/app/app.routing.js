"use strict";
var router_1 = require('@angular/router');
var hero_component_1 = require('../Heroes/hero.component');
var hero_detail_component_1 = require('../heroDetail/hero-detail.component');
var dashboard_component_1 = require('../DashBoard/dashboard.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: hero_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map