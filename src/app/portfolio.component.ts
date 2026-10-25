import { Component, HostListener } from '@angular/core';

interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  readonly filters = ['Todos', 'Cozinha', 'Banheiro', 'Dormitório', 'Sala', 'Closet', 'Home office'];

  readonly projects: PortfolioProject[] = [
    {
      title: 'Cozinha planejada',
      category: 'Cozinha',
      description: 'Madeira, pedra e integração',
      image: '/images/hero-CgIEvHIT.jpg',
    },
    {
      title: 'Sala de estar integrada',
      category: 'Sala',
      description: 'Painel e estante sob medida',
      image: '/images/sala-DsNyqBne.jpg',
    },
    {
      title: 'Dormitório sob medida',
      category: 'Dormitório',
      description: 'Conforto em cada detalhe',
      image: '/images/quarto-B5eoUHcD.jpg',
    },
  ];

  activeFilter = 'Todos';
  selectedProject: PortfolioProject | null = null;

  get filteredProjects(): PortfolioProject[] {
    return this.activeFilter === 'Todos'
      ? this.projects
      : this.projects.filter((project) => project.category === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  @HostListener('document:keydown.escape')
  closeProjectOnEscape(): void {
    this.closeProject();
  }
}
