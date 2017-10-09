import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { HeroService } from '../services/hero.service'

import { Hero } from './hero'
@Component({
    selector: 'hero-detail',
    templateUrl:'src/heroDetail/hero-detail.component.html',
    styleUrls:['src/heroDetail/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    // @Input()
    hero: Hero

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
            .then(hero => console.log(this.hero=hero)); 
        })
    }
    goBack(){
        window.history.back();
    }
}