import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { ThemeSelectService } from 'ngx-theme-stack';

export interface ThemeInfo {
  id: string;
  name: string;
  icon: string;
  desc: string;
  swatch: string[];
}

@Component({
  selector: 'app-theme-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="card"
      [class.active]="theme().id === themeService.resolvedTheme()"
      role="button"
      tabindex="0"
      (click)="themeService.select(theme().id)"
      (keydown.enter)="themeService.select(theme().id)"
      (keydown.space)="selectWithSpace($event)"
    >
      <div class="card-swatch">
        @for (color of theme().swatch; track color) {
          <span class="swatch" [style.background]="color"></span>
        }
      </div>
      <div class="card-body">
        <span class="card-icon">{{ theme().icon }}</span>
        <h3>{{ theme().name }}</h3>
        <p>{{ theme().desc }}</p>
      </div>
    </article>
  `,
  styles: `
    .card {
      display: flex;
      flex-direction: column;
      border-radius: 0.75rem;
      background: var(--card);
      border: 1px solid var(--border);
      overflow: hidden;
      transition: background-color 0.2s ease, border-color 0.2s ease,
        transform 0.15s ease, box-shadow 0.15s ease;
      cursor: pointer;
      position: relative;
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 10%, transparent);
    }

    .card:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .card.active {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px var(--accent),
        0 8px 24px color-mix(in srgb, var(--accent) 12%, transparent);
    }

    .card.active::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 100%;
      background: var(--accent);
    }

    .card-swatch {
      display: flex;
      height: 40px;
    }

    .swatch {
      flex: 1;
    }

    .card-body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }

    .card-icon {
      font-size: 1.1rem;
      line-height: 1;
      margin-bottom: 0.1rem;
    }

    h3 {
      font-size: 0.95rem;
      font-weight: 600;
      margin: 0;
    }

    p {
      font-size: 0.8rem;
      color: var(--muted);
      line-height: 1.45;
      margin: 0;
    }
  `,
})
export class ThemeCard {
  protected readonly themeService = inject(ThemeSelectService);
  readonly theme = input.required<ThemeInfo>();

  selectWithSpace(event: Event): void {
    event.preventDefault();
    this.themeService.select(this.theme().id);
  }
}
