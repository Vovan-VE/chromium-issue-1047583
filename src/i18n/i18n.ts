import i18n from 'i18next';
import XhrBackend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(XhrBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
