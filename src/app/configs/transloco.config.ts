import { AvailableLangs } from '@jsverse/transloco';
import { Language } from '../enums/language.enum';

export const TRANSLOCO_CONFIG: {
  availableLangs: AvailableLangs;
  defaultLang: string;
} = {
  availableLangs: [Language.EN, Language.PL],
  defaultLang: Language.PL,
};
