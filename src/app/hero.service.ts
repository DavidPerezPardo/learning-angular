import { Injectable } from '@angular/core';
// para los Observables y las peticions http
import { Observable, of } from 'rxjs';
//
import { Hero } from './hero';
import {  HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {

    const hero = HEROES.find(hero => hero.id === id);

    if(hero) {
      this.messageService.add('HeroService: fetched hero id=' + id);
    } else {
      this.messageService.add('HeroService: id hero=' + id + ' do not exist');
    }

    return of(hero!);
  }
}