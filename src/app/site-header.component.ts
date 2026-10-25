import { Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  isMenuOpen = false;

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
