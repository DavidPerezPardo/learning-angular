import { Component, OnInit } from '@angular/core';
//
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // con ! le decimos a typescript que permita declarar un atributo sin inicializarlo (por defecto hay que inicializar con un valor)
  heroes!: Hero[];
  
  constructor(private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
