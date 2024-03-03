import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextChainedBackend from "i18next-chained-backend";
import I18NextLocalStorageBackend from "i18next-localstorage-backend";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(I18NextChainedBackend)
  .use(I18nextBrowserLanguageDetector)
  .init({
    backend: {
      backends: [I18NextLocalStorageBackend, I18NextHttpBackend],
      backendOptions: [
        {
          prefix: "pool-site/i18next/",
          expirationTime: 0, //30 * 24 * 60 * 60 * 1000, // 1 month
          defaultVersion: "1",
          storage: window.localStorage,
        },
        { loadPath: "/locales/{{lng}}/{{ns}}.json" },
      ],
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  })
  .catch(console.error);

export default i18next;
