"use client";

import { useState, useEffect, useMemo } from "react";

// Importiamo i file JSON direttamente (statico)
import itMessages from "../messages/it.json";
import enMessages from "../messages/en.json";

// Tipo per le chiavi dei messaggi (supporta chiavi annidate)
type MessageKeys = string;

// Messaggi precaricati
const allMessages = {
  it: itMessages,
  en: enMessages,
};

// Hook per le traduzioni
export function useTranslations() {
  const [currentLang, setCurrentLang] = useState<"it" | "en">("it");
  const [messages, setMessages] = useState<any>(allMessages.it);

  // Carica i messaggi quando cambia la lingua
  useEffect(() => {
    console.log("🔄 Language changed to:", currentLang);
    const newMessages = allMessages[currentLang];
    console.log("✅ Loading messages:", newMessages);
    setMessages(newMessages);
  }, [currentLang]);

  // Inizializza con il localStorage se disponibile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as "it" | "en";
      console.log("💾 Saved language in localStorage:", savedLang);
      if (savedLang && (savedLang === "it" || savedLang === "en")) {
        console.log("🔄 Setting language from localStorage to:", savedLang);
        setCurrentLang(savedLang);
      } else {
        console.log("🇮🇹 No saved language, defaulting to Italian");
      }
    }
  }, []);

  // Funzione per ottenere una traduzione da una chiave annidata
  const t = (key: MessageKeys): string => {
    const keys = key.split(".");
    let value = messages;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  // Funzione per cambiare lingua
  const setLanguage = (lang: "it" | "en") => {
    setCurrentLang(lang);
    localStorage.setItem("language", lang);
  };

  return {
    t,
    currentLang,
    setLanguage,
    messages,
  };
}

// Hook specifico per il Navbar
export function useNavbarTranslations() {
  const { t, currentLang, setLanguage, messages } = useTranslations();
  

  const navbarTranslations = useMemo(() => ({
    studioName: t("navbar.studioName"),
    subtitle: t("navbar.subtitle"),
    home: t("navbar.home"),
    about: t("navbar.about"),
    services: t("navbar.services"),
    articles: t("navbar.articles"),
    contacts: t("navbar.contacts"),
    menu: t("navbar.menu"),
    changeLanguage: t("navbar.changeLanguage"),
    bookConsultation: t("navbar.bookConsultation"),
  }), [messages, currentLang]);

  return {
    currentLang,
    setLanguage,
    t: navbarTranslations,
  };
}

// Hook specifico per l'Hero
export function useHeroTranslations() {
  const { t, messages, currentLang } = useTranslations();
  
  const heroTranslations = useMemo(() => ({
    title: t("hero.title"),
    subtitle: t("hero.subtitle"),
    cta: t("hero.cta"),
    trustFree: t("hero.trustFree"),
    trustResponse: t("hero.trustResponse"),
  }), [messages, currentLang]);

  return {
    t: heroTranslations,
  };
}

// Hook specifico per le Areas
export function useAreasTranslations() {
  const { t, messages, currentLang } = useTranslations();
  
  const areasTranslations = useMemo(() => ({
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
  }), [messages, currentLang]);

  return {
    t: areasTranslations,
  };
}
