import { Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
