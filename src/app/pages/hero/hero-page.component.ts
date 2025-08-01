import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
      templateUrl: './hero-page.component.html',
      styleUrls: ['./hero-page.component.css'],
      imports: [UpperCasePipe],
})
export class HeroPageComponent {
      name = signal('Ironman');
      age = signal(45);

      heroDescription = computed(() => {
            const description = `${this.name()} - ${this.age()} years old`;

            return description;
      });

      //? capitalizeHeroName = computed(() => this.name().toUpperCase());

      changeHero() {
            this.name.set('Spiderman');
            this.age.set(25);
      }

      changeAge() {
            this.age.set(60);
      }

      resetHero() {
            this.name.set('Ironman');
            this.age.set(45);
      }
}
