import {Injectable} from '@angular/core'
import { Hero } from '../heroDetail/hero';

import { Heroes } from '../heroDetail/mock-heroes';


@Injectable()
export class HeroService {
  //  getHeroes() {
  //   return Promise.resolve(Heroes);
  // }

  getHeroSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(Heroes), 1000)
    );
  }
  getHero(id: number) {
    return this.getHeroSlowly()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}