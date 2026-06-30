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
  templateUrl: './theme-card.component.html',
  styleUrl: './theme-card.component.css',
})
export class ThemeCard {
  protected readonly themeService = inject(ThemeSelectService);
  readonly theme = input.required<ThemeInfo>();

  selectWithSpace(event: Event): void {
    event.preventDefault();
    this.themeService.select(this.theme().id);
  }
}
