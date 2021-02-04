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
  selectedHero!: Hero;
  
  constructor(private HeroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add("HeroesComponent: Selected hero id=" + hero.id);
  }

  getHeroes(): void {
    this.HeroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
