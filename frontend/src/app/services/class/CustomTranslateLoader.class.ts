import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';

declare const require: any;
const i18nMainFest = require('../../../assets/i18n/manifest.json');

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {
  }

  getTranslation(lang: string): Observable<any> {
    const langFileKey = lang + '.json';
    let fileName = langFileKey;

    if (i18nMainFest[langFileKey] && i18nMainFest[langFileKey] !== langFileKey) {
      fileName = 'hashed/' + i18nMainFest[langFileKey];
    }

    return this.http.get('/assets/i18n/' + fileName);
  }
}
