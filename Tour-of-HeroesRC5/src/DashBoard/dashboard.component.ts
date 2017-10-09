import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../heroDetail/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'src/DashBoard/dashboard.component.html',
    styleUrls:['src/DashBoard/dashboard.component.css']

})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private herOService: HeroService, private router: Router) { }
    ngOnInit() {
        this.herOService.getHeroSlowly()
            .then(heroes => console.log(this.heroes = heroes.slice(1, 5)))
    }
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}