import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeSelect } from '../theme-select/theme-select.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSelect],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class AppHeader {}
