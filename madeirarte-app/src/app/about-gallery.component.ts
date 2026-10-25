import { Component } from '@angular/core';

interface AboutImage {
  label: string;
  path: string;
}

@Component({
  selector: 'app-about-gallery',
  standalone: true,
  templateUrl: './about-gallery.component.html',
})
export class AboutGalleryComponent {
  readonly images: AboutImage[] = [
    { label: 'Salas de estar', path: '/images/sala-DsNyqBne.jpg' },
    { label: 'Cozinhas planejadas', path: '/images/hero-CgIEvHIT.jpg' },
    { label: 'Closets', path: '/images/closet-DYzXqLNB.jpg' },
    { label: 'Escritórios', path: '/images/escritorio-BaPBtRLO.jpg' },
  ];

  activeImage = 0;

  showImage(index: number): void {
    this.activeImage = index;
  }
}
