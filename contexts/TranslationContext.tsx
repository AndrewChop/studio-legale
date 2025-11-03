"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Importiamo i file JSON direttamente
import itMessages from "../messages/it.json";
import enMessages from "../messages/en.json";

type Language = "it" | "en";
type Messages = typeof itMessages;

interface TranslationContextType {
  currentLang: Language;
  messages: Messages;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

const allMessages = {
  it: itMessages,
  en: enMessages,
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("it");
  const [messages, setMessages] = useState<Messages>(allMessages.it);

  // Funzione per ottenere una traduzione
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = messages;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  // Funzione per cambiare lingua
  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
    setMessages(allMessages[lang]);
    localStorage.setItem("language", lang);
  };

  // Carica la lingua salvata all'avvio
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;

      if (savedLang && (savedLang === "it" || savedLang === "en")) {
        setCurrentLang(savedLang);
        setMessages(allMessages[savedLang]);
      }
    }
  }, []);

  const value = {
    currentLang,
    messages,
    setLanguage,
    t,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

// Hook semplificato per usare le traduzioni
export function useTranslations() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error(
      "useTranslations must be used within a TranslationProvider"
    );
  }
  return context;
}

// Hook specifici che si aggiornano automaticamente
export function useNavbarTranslations() {
  const { t, currentLang, setLanguage, messages } = useTranslations();

  return {
    currentLang,
    setLanguage,
    t: {
      studioName: t("navbar.studioName"),
      subtitle: t("navbar.subtitle"),
      home: t("navbar.home"),
      about: t("navbar.about"),
      areas: t("navbar.services"),
      articles: t("navbar.articles"),
      contacts: t("navbar.contacts"),
      menu: t("navbar.menu"),
      changeLanguage: t("navbar.changeLanguage"),
      bookConsultation: t("navbar.bookConsultation"),
      navigation: messages.navbar?.navigation || {},
    },
  };
}

export function useHeroTranslations() {
  const { t, currentLang } = useTranslations();

  return {
    t: {
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      cta: t("hero.cta"),
      trustFree: t("hero.trustFree"),
      trustResponse: t("hero.trustResponse"),
    },
  };
}

export function useAreasTranslations() {
  const { t, currentLang } = useTranslations();

  return {
    t: {
      title: t("areas.title"),
      subtitle: t("areas.subtitle"),
      criminal: {
        title: t("areas.criminal.title"),
        description: t("areas.criminal.description"),
      },
      civil: {
        title: t("areas.civil.title"),
        description: t("areas.civil.description"),
      },
      family: {
        title: t("areas.family.title"),
        description: t("areas.family.description"),
      },
      military: {
        title: t("areas.military.title"),
        description: t("areas.military.description"),
      },
      ctaText: t("areas.ctaText"),
      ctaButton: t("areas.ctaButton"),
    },
  };
}
