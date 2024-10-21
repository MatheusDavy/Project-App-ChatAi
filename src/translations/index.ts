import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { defaultTranslations } from "./default";
import { homeTranslations } from "./pages/home";
import { functionalitiesTranslations } from "./pages/functionalities";
import { conversationsTranslations } from "./pages/conversations";
import { pronunciationTranslations } from "./pages/pronunciation";
import { translationsTranslations } from "./pages/translations";

const translations = {
  pt: {
    translation: {
      ...defaultTranslations.pt,
      ...homeTranslations.pt,
      ...functionalitiesTranslations.pt,
      ...conversationsTranslations.pt,
      ...pronunciationTranslations.pt,
      ...translationsTranslations.pt
    },
  },
  en: {
    translation: {
      ...defaultTranslations.en,
      ...homeTranslations.en,
      ...functionalitiesTranslations.en,
      ...conversationsTranslations.en,
      ...pronunciationTranslations.en,
      ...translationsTranslations.en
    },
  },
  es: {
    translation: {
      ...defaultTranslations.es,
      ...homeTranslations.es,
      ...functionalitiesTranslations.es,
      ...conversationsTranslations.es,
      ...pronunciationTranslations.es,
      ...translationsTranslations.es
    },
  },
  fr: {
    translation: {
      ...defaultTranslations.fr,
      ...homeTranslations.fr,
      ...functionalitiesTranslations.fr,
      ...conversationsTranslations.fr,
      ...pronunciationTranslations.fr,
      ...translationsTranslations.fr
    },
  },
};

const getLanguageFlag = {
  pt: require("@/src/assets/images/brazil.png"),
  en: require("@/src/assets/images/usa.png"),
  es: require("@/src/assets/images/spanish.png"),
  fr: require("@/src/assets/images/franch.png"),
};

const getLanguageCode = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translations,
    lng: "pt",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { getLanguageFlag, getLanguageCode };
export default i18n;
