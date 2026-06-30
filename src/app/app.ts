import { Component, inject } from '@angular/core';
import { ThemeSelectService } from 'ngx-theme-stack';
import { AppHeader } from './components/header.component';
import { ThemeCard } from './components/theme-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeader, ThemeCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly theme = inject(ThemeSelectService);

  protected readonly themes = [
    {
      id: 'light',
      name: 'Light',
      icon: '☀️',
      desc: 'Light background, dark text. The classic default.',
      swatch: ['#ffffff', '#f1f5f9', '#4361ee', '#1a1a2e'],
    },
    {
      id: 'dark',
      name: 'Dark',
      icon: '🌙',
      desc: 'Dark mode. Gentle on the eyes.',
      swatch: ['#0f172a', '#1e293b', '#818cf8', '#e2e8f0'],
    },
    {
      id: 'sunset',
      name: 'Sunset',
      icon: '🌅',
      desc: 'Warm and vibrant. Oranges and violets.',
      swatch: ['#1a0a2e', '#2d1b4e', '#ff6b6b', '#ffd5c2'],
    },
    {
      id: 'ocean',
      name: 'Ocean',
      icon: '🌊',
      desc: 'Cool and serene. Deep blues and teal.',
      swatch: ['#0a1628', '#0f2a3e', '#4dd0e1', '#b8e6f0'],
    },
  ];
}
