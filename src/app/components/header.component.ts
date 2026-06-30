import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeSelect } from './theme-select.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSelect],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <div class="brand">
        <svg
          class="logo-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <span class="brand-text">ngx-theme-stack</span>
      </div>

      <div class="header-actions">
        <app-theme-select />
      </div>
    </header>
  `,
  styles: `
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1.5rem;
      border-bottom: 1px solid var(--border);
      background: color-mix(in srgb, var(--card) 80%, transparent);
      backdrop-filter: blur(8px);
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .logo-icon {
      width: 22px;
      height: 22px;
      color: var(--accent);
    }

    .brand-text {
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: -0.02em;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `,
})
export class AppHeader {}
