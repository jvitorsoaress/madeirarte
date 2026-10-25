import { Component, OnDestroy, OnInit } from '@angular/core';
import { AboutGalleryComponent } from './about-gallery.component';
import { FaqComponent } from './faq.component';
import { HeroComponent } from './hero.component';
import { PortfolioComponent } from './portfolio.component';
import { ServicesComponent } from './services.component';
import { SiteHeaderComponent } from './site-header.component';

@Component({
  selector: 'app-root',
  imports: [
    AboutGalleryComponent,
    FaqComponent,
    HeroComponent,
    PortfolioComponent,
    ServicesComponent,
    SiteHeaderComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  mapLoaded = false;
  mapLoadFailed = false;
  private mapLoadTimeout?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.mapLoadTimeout = setTimeout(() => {
      if (!this.mapLoaded) {
        this.mapLoadFailed = true;
      }
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.mapLoadTimeout) {
      clearTimeout(this.mapLoadTimeout);
    }
  }

  onMapLoad(): void {
    this.mapLoaded = true;
    this.mapLoadFailed = false;
    if (this.mapLoadTimeout) {
      clearTimeout(this.mapLoadTimeout);
    }
  }

  onMapError(): void {
    this.mapLoadFailed = true;
  }
}
