import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { TranslocoLoaderData } from '@jsverse/transloco/lib/transloco.loader';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHtttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(
    lang: string,
    data?: TranslocoLoaderData
  ): Observable<Translation> | Promise<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}
