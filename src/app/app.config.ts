import { provideThemeStack } from 'ngx-theme-stack';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideThemeStack({
      themes: ['system', 'light', 'dark', 'sunset', 'ocean'] as const,
      defaultTheme: 'system',
      storageKey: 'ngx-theme-stack',
      mode: 'class',
      strategy: 'critters',
    }),
  ],
};
