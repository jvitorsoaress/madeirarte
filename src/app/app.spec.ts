import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the page sections and original hero content', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Salas de estar que convidam ao aconchego');
    expect(compiled.querySelector('#projetos')).toBeTruthy();
    expect(compiled.querySelector('#sobre')).toBeTruthy();
    expect(compiled.querySelector('#servicos')).toBeTruthy();
    expect(compiled.querySelector('#contato')).toBeTruthy();
    expect(compiled.querySelector('.site-footer')).toBeTruthy();
    expect(compiled.querySelector('.footer-hours')?.textContent).toContain('09:00 – 18:00');
    expect(compiled.querySelector<HTMLIFrameElement>('.location-map iframe')?.src).toContain('output=embed');
  });

  it('shows a usable location fallback when the map is unavailable', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    fixture.componentInstance.mapLoadFailed = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.map-fallback')?.textContent).toContain('R. Alaska, 1013');
    expect(compiled.querySelector<HTMLAnchorElement>('.map-fallback a')?.href).toContain('google.com/maps/dir/');
    expect(compiled.querySelector('.location-map iframe')?.classList.contains('map-frame-hidden')).toBeTrue();
    fixture.destroy();
  });

  it('should open the mobile menu, filter projects, and expand a FAQ item', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('.menu-toggle')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.menu-toggle')?.getAttribute('aria-expanded')).toBe('true');

    const filters = Array.from(compiled.querySelectorAll<HTMLButtonElement>('.filter-list button'));
    filters.find((button) => button.textContent?.trim() === 'Banheiro')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.empty-projects')?.textContent).toContain('Ainda não há projetos');

    compiled.querySelector<HTMLButtonElement>('.faq-item button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.faq-answer')?.textContent).toContain('não foi incluída na cópia salva');
  });
});
