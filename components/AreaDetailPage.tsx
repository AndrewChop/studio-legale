"use client";

import Link from "next/link";
import { ChevronLeft, CheckCircle, HelpCircle } from "lucide-react";
import { useTranslations } from "../contexts/TranslationContext";
import { useState } from "react";

interface AreaDetailPageProps {
  areaKey: "civil" | "criminal" | "family" | "condo";
}

export default function AreaDetailPage({ areaKey }: AreaDetailPageProps) {
  const { t, messages } = useTranslations();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const area = messages.areas?.[areaKey] as any;

  if (!area) {
    return <div className="container mx-auto px-4 py-20">Area not found</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/aree-attivita"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>
              {t("common.back")} - {t("areas.title")}
            </span>
          </Link>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {area.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {area.overview}
          </p>

          {/* Handled By */}
          <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm font-semibold text-primary mb-2">
              {t("areas.labels.handledBy")}
            </p>
            <p className="text-2xl font-semibold text-foreground">
              {area.handledBy}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            {t("areas.labels.services")}
          </h2>

          <div className="grid gap-4 md:gap-6">
            {Array.isArray(area.services) &&
              area.services.map((service: string, index: number) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 md:p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                >
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-base md:text-lg text-foreground font-medium">
                    {service}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            {t("areas.labels.faqs")}
          </h2>

          <div className="space-y-4">
            {Array.isArray(area.faqs) &&
              area.faqs.map((faq: any, index: number) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden bg-background hover:border-primary/50 transition-colors"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-4 p-6 md:p-8 hover:bg-primary/5 transition-colors text-left"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronLeft
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                        expandedFaq === index ? "-rotate-90" : "rotate-90"
                      }`}
                    />
                  </button>

                  {expandedFaq === index && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-8 border-t border-border bg-primary/5">
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {area.ctaText || t("areas.ctaText")}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t("areas.labels.teamMessage")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prenota-consulenza"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              {t("areas.ctaButton")}
            </Link>
            <Link
              href="/chi-siamo"
              className="px-8 py-4 bg-card border border-primary/20 text-foreground rounded-lg font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors text-center"
            >
              {t("presentation.cta")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
