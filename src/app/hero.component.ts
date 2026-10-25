import { Component } from '@angular/core';

interface HeroSlide {
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly slides: HeroSlide[] = [
    {
      title: 'Salas de estar que convidam ao aconchego',
      category: 'Salas de estar',
      image: 'images/sala-DsNyqBne.jpg',
    },
    {
      title: 'Cozinhas planejadas para viver bons momentos',
      category: 'Cozinhas planejadas',
      image: 'images/hero-CgIEvHIT.jpg',
    },
    {
      title: 'Closets pensados para a sua rotina',
      category: 'Closets',
      image: 'images/closet-DYzXqLNB.jpg',
    },
    {
      title: 'Um espaço de trabalho feito para você',
      category: 'Escritórios',
      image: 'images/escritorio-BaPBtRLO.jpg',
    },
  ];

  activeSlide = 0;

  showSlide(index: number): void {
    this.activeSlide = index;
  }
}
