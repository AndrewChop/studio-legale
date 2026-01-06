"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useHeroTranslations } from "../contexts/TranslationContext";

export default function ResponsiveHero() {
  const { t } = useHeroTranslations();

  return (
    <section className="bg-muted py-8 sm:py-12 md:py-16 lg:py-20 border-b border-border">
      <div className="container mx-auto px-4 text-center">
        {/* Title - Mobile First */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
          {t.title}
        </h1>

        {/* Subtitle - Responsive */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl lg:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
          {t.subtitle}
        </p>

        {/* CTA Button - Touch Friendly */}
        <Link href="/prenota-consulenza">
          <Button
            size="lg"
            className="min-h-14 bg-gray-900 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg font-medium text-sm md:text-base lg:text-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            {t.cta}
          </Button>
        </Link>

        {/* Trust indicators for mobile */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>{t.trustFree}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>{t.trustResponse}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
