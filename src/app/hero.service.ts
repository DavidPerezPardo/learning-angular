import { Injectable } from '@angular/core';
// para los Observables y las peticions http
import { Observable, of } from 'rxjs';
//
import { Hero } from './hero';
import {  HEROES } from './mock-heroes';
// messsages service
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
}
