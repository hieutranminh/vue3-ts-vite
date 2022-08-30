import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import ja from '@/locales/ja.json';
import vi from '@/locales/vi.json';
import type { App } from 'vue';

export const i18n = createI18n({
  legacy: true,
  allowComposition: true,
  locale: import.meta.env.VITE_APP_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en: en,
    ja: ja,
    vi: vi,
  },
});

// setup i18n instance with glob
export const setupI18n = async (app: App<Element>) => {
  app.use(i18n);
};
