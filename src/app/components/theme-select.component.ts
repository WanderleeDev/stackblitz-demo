import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ThemeSelectService } from 'ngx-theme-stack';

@Component({
  selector: 'app-theme-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (theme.isHydrated()) {
      <label>
        <span class="label">Tema</span>
        <select (change)="onChange($event)">
          @for (t of theme.availableThemes; track t) {
            <option [value]="t" [selected]="theme.selectedTheme() === t">
              {{ t }}
            </option>
          }
        </select>
      </label>
    } @else {
      <div class="skeleton" aria-hidden="true"></div>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .label {
      font-size: 0.875rem;
      color: var(--muted);
      font-weight: 500;
    }

    select {
      appearance: none;
      background: var(--card);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 0.5rem 2rem 0.5rem 0.75rem;
      font-size: 0.875rem;
      font-family: inherit;
      cursor: pointer;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.5rem center;
      transition: border-color 0.2s ease;
    }

    select:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 25%, transparent);
    }

    .skeleton {
      width: 128px;
      height: 38px;
      border-radius: 0.5rem;
      background: var(--card);
      border: 1px solid var(--border);
    }
  `,
})
export class ThemeSelect {
  protected readonly theme = inject(ThemeSelectService);

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.theme.select(value);
  }
}
