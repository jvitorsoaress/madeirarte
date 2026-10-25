import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly services: Service[] = [
    {
      title: 'Cozinha Planejada',
      description: 'Cozinhas completas sob medida, do projeto à instalação.',
      image: '/images/hero-CgIEvHIT.jpg',
    },
    {
      title: 'Guarda-Roupa Planejado',
      description: 'Guarda-roupas sob medida para casal, solteiro e infantil.',
      image: '/images/guardaroupa-DsGHAAuL.jpg',
    },
    {
      title: 'Closet Planejado',
      description: 'Walk-in closets e closets compactos projetados para você.',
      image: '/images/closet-DYzXqLNB.jpg',
    },
    {
      title: 'Painel de TV e Rack',
      description: 'Painéis de TV planejados que transformam a sala de estar.',
      image: '/images/sala-DsNyqBne.jpg',
    },
    {
      title: 'Móveis para Banheiro',
      description: 'Gabinetes e armários planejados para banheiro e lavabo.',
      image: '/images/banheiro-CqbNv-QV.jpg',
    },
    {
      title: 'Home Office',
      description: 'Escritórios domésticos planejados para máxima produtividade.',
      image: '/images/escritorio-BaPBtRLO.jpg',
    },
    {
      title: 'Dormitório Infantil',
      description: 'Quartos infantis criativos e funcionais que crescem com seu filho.',
      image: '/images/infantil-BwIbH5lv.jpg',
    },
  ];

  serviceStart = 0;

  get visibleServices(): Service[] {
    return Array.from(
      { length: 3 },
      (_, offset) => this.services[(this.serviceStart + offset) % this.services.length],
    );
  }

  serviceNumber(offset: number): string {
    return String((this.serviceStart + offset) % this.services.length + 1).padStart(2, '0');
  }

  moveServices(direction: -1 | 1): void {
    this.serviceStart =
      (this.serviceStart + direction + this.services.length) % this.services.length;
  }
}
