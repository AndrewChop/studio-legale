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
      menu: t("navbar.menu"),
      changeLanguage: t("navbar.changeLanguage"),
      bookConsultation: t("navbar.bookConsultation"),
      navigation: messages.navbar?.navigation || {},
      areasDropdown: messages.navbar?.areasDropdown || {},
      publicationsDropdown: messages.navbar?.publicationsDropdown || {},
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
      condo: {
        title: t("areas.condo.title"),
        description: t("areas.condo.description"),
      },
      ctaText: t("areas.ctaText"),
      ctaButton: t("areas.ctaButton"),
    },
  };
}

export function useContactsTranslations() {
  const { t } = useTranslations();

  return {
    t: {
      title: t("contacts.title"),
      subtitle: t("contacts.subtitle"),
      cta: t("contacts.cta"),
    },
  };
}

export function usePresentationTranslations() {
  const { t } = useTranslations();

  return {
    t: {
      title: t("presentation.title"),
      cta: t("presentation.cta"),
      marzia: {
        name: t("presentation.marzia.name"),
        role: t("presentation.marzia.role"),
        description: t("presentation.marzia.description"),
      },
      antonio: {
        name: t("presentation.antonio.name"),
        role: t("presentation.antonio.role"),
        description: t("presentation.antonio.description"),
      },
    },
  };
}

export function useArticlesTranslations() {
  const { t } = useTranslations();

  return {
    t: {
      title: t("articles.title"),
      readMore: t("articles.readMore"),
      viewAll: t("articles.viewAll"),
    },
  };
}

export function useFooterTranslations() {
  const { t } = useTranslations();

  return {
    t: {
      studioName: t("footer.studioName"),
      copyright: t("footer.copyright"),
      privacy: t("footer.privacy"),
      contacts: t("footer.contacts"),
      adminArea: t("footer.adminArea"),
    },
  };
}
