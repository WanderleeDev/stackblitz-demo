import { TestBed } from '@angular/core/testing';
import { provideThemeStack } from 'ngx-theme-stack';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideThemeStack({
          themes: ['system', 'light', 'dark', 'sunset', 'ocean'] as const,
          defaultTheme: 'system',
          storageKey: 'ngx-theme-stack',
          mode: 'class',
          strategy: 'critters',
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Multi-theme');
  });
});
