import { inject } from '@angular/core';
import { Translation, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { TRANSLOCO_CONFIG } from '../configs/transloco.config';

export const translocoFactory = (): Promise<Translation> => {
  console.log('translocoFactory');
  const translocoService = inject(TranslocoService);

  const currentLanguage = TRANSLOCO_CONFIG.defaultLang;
  translocoService.setActiveLang(currentLanguage);
  return firstValueFrom(translocoService.load(currentLanguage));
};
