import {
  ApplicationConfig,
  isDevMode,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Lara from '@primeng/themes/lara';
import { providePrimeNG } from 'primeng/config';

import { ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TRANSLOCO_CONFIG } from './configs/transloco.config';
import { TranslocoHtttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { appInitializerFactory } from './factories/app-initializer.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(ROUTES),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    }),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: TRANSLOCO_CONFIG.availableLangs,
        defaultLang: TRANSLOCO_CONFIG.defaultLang,

        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHtttpLoader,
    }),
    provideAppInitializer(appInitializerFactory),
  ],
};
