import { Component, computed, signal } from '@angular/core';

@Component({
      templateUrl: './hero-page.component.html',
      styleUrls: ['./hero-page.component.css'],
})
export class HeroPageComponent {
      name = signal('Ironman');
      age = signal(45);

      getHeroDescription = computed(() => {
            const description = `${this.name()}-${this.age()} years old`;

            return description;
      });

      // getHeroDescription() {
      //       return `${this.name()}-${this.age()} years old`;
      // }

      changeHero() {
            this.name.set('Spiderman');
            this.age.set(25);
      }

      changeAge() {
            this.age.set(60);
      }

      // getHeroNameUpperCase() {
      //   return `${this.name().toUpperCase()}`;
      // }

      resetHero() {
            this.name.set('Ironman');
            this.age.set(45);
      }
}
