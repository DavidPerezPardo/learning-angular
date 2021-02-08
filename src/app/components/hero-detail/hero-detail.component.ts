import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // Input Decorator, similar a las props de Vue, para pasar datos de componente padre a hijo
  // hay que importar Input del angular/core
  // @Input() hero!: Hero;
  hero!: Hero;

  constructor(
    // DI (injeccion de dependencias)
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getHero();
  };

  // + operator, converts the string to a number
  getHero(): void {
    // get id param of the URL
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // backward one step i nthe browser's history
  goBack(): void {
    this.location.back();
  }

}
