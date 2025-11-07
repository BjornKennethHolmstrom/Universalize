import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { base } from '$app/paths';

export const languages = {
  en: 'English',
  sv: 'Svenska'
};

function getInitialLanguage() {
  if (browser) {
    const stored = localStorage.getItem('language');
    if (stored && languages[stored]) {
      return stored;
    }
    
    const browserLang = navigator.language.split('-')[0];
    if (languages[browserLang]) {
      return browserLang;
    }
  }
  return 'en';
}

export const currentLanguage = writable(getInitialLanguage());
export const translations = writable({});

// Load translations when language changes
currentLanguage.subscribe(lang => {
  if (browser) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    loadTranslations(lang);
  }
});

export async function loadTranslations(lang: string) {
  try {
    const response = await fetch(`${base}/i18n/${lang}.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    translations.set(data);
    return data;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    
    if (lang !== 'en') {
      return loadTranslations('en');
    }
    
    translations.set({});
    return {};
  }
}

export const t = derived(
  translations,
  ($translations) => (key: string, fallback?: any): any => {
    const keys = key.split('.');
    let value: any = $translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback !== undefined ? fallback : key;
      }
    }
    
    return value !== undefined ? value : (fallback !== undefined ? fallback : key);
  }
);

export function switchLanguage(lang: string) {
  if (languages[lang]) {
    currentLanguage.set(lang);
  }
}

// Load initial translations
if (browser) {
  loadTranslations(getInitialLanguage());
}
