import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Available languages
export const languages = {
  en: 'English',
  sv: 'Svenska'
};

// Get initial language from localStorage or browser preference
function getInitialLanguage() {
  if (browser) {
    // Check localStorage first
    const stored = localStorage.getItem('language');
    if (stored && languages[stored]) {
      return stored;
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (languages[browserLang]) {
      return browserLang;
    }
  }
  
  // Default to English
  return 'en';
}

// Create writable store for current language
export const currentLanguage = writable(getInitialLanguage());

// Save language preference to localStorage
currentLanguage.subscribe(lang => {
  if (browser) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }
});

// Store for translations
export const translations = writable({});

// Load translations for a language
export async function loadTranslations(lang: string) {
  try {
    const response = await fetch(`/i18n/${lang}.json`);
    const data = await response.json();
    translations.set(data);
    return data;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    // Fallback to English if translation fails
    if (lang !== 'en') {
      return loadTranslations('en');
    }
    return {};
  }
}

// Derived store for translation function
export const t = derived(
  translations,
  ($translations) => (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = $translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : (fallback || key);
  }
);

// Helper to switch language
export function switchLanguage(lang: string) {
  if (languages[lang]) {
    currentLanguage.set(lang);
    loadTranslations(lang);
  }
}
