import { SUPPORTED_LANGUAGES, type Language, type Localized } from './types';

const LANGUAGE_STORAGE_KEY = 'preferred-language';
const LANGUAGE_QUERY_PARAMETER = 'lang';
const DEFAULT_LANGUAGE: Language = 'en';

function isSupportedLanguage(value: string | null | undefined): value is Language {
  return SUPPORTED_LANGUAGES.includes(value as Language);
}

function readStoredLanguage(): string | null {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Order of preference: ?lang= in the URL, the visitor's last choice, the browser language. */
export function detectInitialLanguage(): Language {
  const fromQuery = new URLSearchParams(window.location.search).get(LANGUAGE_QUERY_PARAMETER);
  if (isSupportedLanguage(fromQuery)) return fromQuery;

  const fromStorage = readStoredLanguage();
  if (isSupportedLanguage(fromStorage)) return fromStorage;

  const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
  return isSupportedLanguage(browserLanguage) ? browserLanguage : DEFAULT_LANGUAGE;
}

export function rememberLanguage(language: Language): void {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this visit only.
  }
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set(LANGUAGE_QUERY_PARAMETER, language);
  window.history.replaceState(null, '', currentUrl);
}

export function translate<Value>(localizedValue: Localized<Value>, language: Language): Value {
  return localizedValue[language];
}
