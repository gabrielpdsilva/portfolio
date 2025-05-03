import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import { defaultSettings } from './../constants/settings'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultSettings.language,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/portfolio/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18n
