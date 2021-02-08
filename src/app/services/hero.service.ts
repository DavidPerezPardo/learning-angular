import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://akabab.github.io/superhero-api/api/all.json';
  private heroeUrl = 'https://akabab.github.io/superhero-api/api/id/';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  // GET from the server
  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {

    this.messageService.add('HeroService: fetched heroe');
    
    return this.http.get<Hero>(this.heroeUrl + id + ".json")
      .pipe(
        catchError(this.handleError<Hero>('getHero'))
      );
  }

  private handleError<T>(operation = 'operation', result?: any) {
    
    return (error: any): Observable<T> => {
      
      console.error(error.message);
      this.log(operation + ' failed:' + error.message);

      return of(result as T);
    }
  }

  private log(message: String) {
      this.messageService.add('HeroService:' + message);
  }
}