"use client";

import { Mail, MapPin, Phone, Clock, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/contexts/TranslationContext";

export default function ContattiPage() {
  const { t } = useTranslations();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/15 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t("contactsPage.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {t("contactsPage.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-14 md:py-18 lg:py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl grid gap-6 md:gap-8 lg:grid-cols-3">
          <div className="p-6 md:p-7 bg-background border border-border rounded-xl shadow-sm space-y-3 h-full flex flex-col">
            <div className="flex items-center gap-3 text-secondary">
              <Phone className="h-5 w-5" />
              <h2 className="text-lg font-semibold text-foreground">
                {t("contactsPage.callTitle")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("contactsPage.callDesc")}
            </p>
            <div className="space-y-2 font-semibold text-foreground mt-auto">
              <a
                className="block hover:text-primary transition-colors"
                href="https://wa.me/393383470581"
                target="_blank"
                rel="noopener noreferrer"
              >
                +39 338 347 0581
              </a>
              <a
                className="block hover:text-primary transition-colors"
                href="https://wa.me/393669141424"
                target="_blank"
                rel="noopener noreferrer"
              >
                +39 366 914 1424
              </a>
            </div>
          </div>

          <div className="p-6 md:p-7 bg-background border border-border rounded-xl shadow-sm space-y-3 h-full flex flex-col">
            <div className="flex items-center gap-3 text-secondary">
              <Mail className="h-5 w-5" />
              <h2 className="text-lg font-semibold text-foreground">
                {t("contactsPage.mailTitle")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("contactsPage.mailDesc")}
            </p>
            <a
              className="font-semibold text-foreground break-all hover:text-primary transition-colors mt-auto"
              href="mailto:studiolegaleamaranto@gmail.com"
            >
              studiolegaleamaranto@gmail.com
            </a>
          </div>

          <div className="p-6 md:p-7 bg-background border border-border rounded-xl shadow-sm space-y-3 h-full flex flex-col">
            <div className="flex items-center gap-3 text-secondary">
              <MapPin className="h-5 w-5" />
              <h2 className="text-lg font-semibold text-foreground">
                {t("contactsPage.addressTitle")}
              </h2>
            </div>
            <Link
              href="https://maps.google.com/maps?q=Via+Bugatti+33,+56022+Castelfranco+di+Sotto+(PI),+Italy"
              target="_blank"
              className="text-muted-foreground leading-relaxed hover:text-primary transition-colors"
            >
              {t("contactsPage.addressLine")}
            </Link>
            <p className="text-sm text-muted-foreground mt-auto">
              {t("contactsPage.mapNote")}
            </p>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("contactsPage.mapTitle")}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t("contactsPage.mapSubtitle")}
          </p>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm h-96 md:h-[500px] lg:h-[600px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.284133208921!2d10.737606476179492!3d43.70464397109982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a70e26535e68d%3A0xcc7d35c05106c6ea!2sVia%20Ettore%20Bugatti%2C%2033%2C%2056022%20Castelfranco%20di%20Sotto%20PI!5e0!3m2!1sit!2sit!4v1767626531522!5m2!1sit!2sit"
              className="w-full h-full absolute inset-0"
              style={{ border: 0, pointerEvents: "auto" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Google Studio Legale Amaranto"
            />
          </div>
        </div>
      </section>

      {/* Hours & Booking */}
      <section className="py-14 md:py-18 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="p-6 md:p-7 bg-background border border-border rounded-xl shadow-sm space-y-4 h-full">
            <div className="flex items-center gap-3 text-secondary">
              <Clock className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-foreground">
                {t("contactsPage.hoursTitle")}
              </h2>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>{t("contactsPage.hoursWeek")}</p>
              <p>{t("contactsPage.hoursSat")}</p>
              <p className="text-sm text-muted-foreground/80">
                {t("contactsPage.hoursNote")}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-7 bg-primary text-primary-foreground rounded-xl shadow-md space-y-4 h-full flex flex-col">
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-5 w-5" />
              <h2 className="text-xl font-semibold">
                {t("contactsPage.bookingTitle")}
              </h2>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              {t("contactsPage.bookingDesc")}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                href="/prenota-consulenza"
                className="px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                {t("contactsPage.bookingCta")}
              </Link>
              <a
                href="tel:+393383470581"
                className="px-4 py-3 bg-background text-secondary border border-primary-foreground/30 rounded-lg font-semibold hover:border-primary-foreground/60 transition-colors"
              >
                {t("contactsPage.urgentCta")}
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-auto">
              {t("contactsPage.responseTime")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
