import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ThemeSelectService } from 'ngx-theme-stack';

@Component({
  selector: 'app-theme-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme-select.component.html',
  styleUrl: './theme-select.component.css',
})
export class ThemeSelect {
  protected readonly theme = inject(ThemeSelectService);

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.theme.select(value);
  }
}
