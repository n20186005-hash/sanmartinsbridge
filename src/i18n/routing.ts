import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en', 'fr', 'zh-Hant'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  // Disable automatic redirection based on Accept-Language header
  // This prevents Googlebot from experiencing redirect loops or errors
  localeDetection: false
});
