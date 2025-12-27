"use client";

import Image from "next/image";
import { useAboutPageTranslations } from "../../contexts/TranslationContext";

export default function ChiSiamoPage() {
  const { t } = useAboutPageTranslations();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Professional */}
      <section className="bg-gradient-to-br from-primary to-secondary/10 text-muted-foreground py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4 tracking-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Avv. Marzia Amaranto */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid md:grid-cols-[1fr_320px] gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 order-2 md:order-1">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
                    {t.marzia.name}
                  </h2>
                  <p className="text-xl md:text-2xl text-primary font-semibold uppercase tracking-wide">
                    {t.marzia.role}
                  </p>
                </div>

                <div className="space-y-6 text-muted-foreground">
                  <div className="bg-accent/20 p-6 rounded-none border-l-4 border-primary">
                    <p className="font-semibold text-secondary uppercase tracking-wide text-sm mb-2">
                      {t.expertiseLabel}
                    </p>
                    <p className="font-bold text-foreground text-base">
                      {t.marzia.education}
                    </p>
                  </div>

                  <p className="leading-relaxed text-lg text-foreground font-light">
                    {t.marzia.expertise}
                  </p>

                  <p className="leading-relaxed text-base text-foreground">
                    {t.marzia.experience}
                  </p>

                  <p className="leading-relaxed text-sm text-muted-foreground italic border-l-2 border-accent pl-4">
                    {t.marzia.publications}
                  </p>

                  <div className="bg-secondary/5 p-6 rounded-none border-l-4 border-secondary">
                    <p className="text-sm font-medium text-secondary">
                      {t.marzia.qualifications}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full h-[700px] rounded-lg overflow-hidden shadow-2xl order-1 md:order-2">
                <Image
                  src="/marzia.jpg"
                  alt={t.marzia.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Avv. Antonio Amaranto */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[320px_1fr] gap-12 items-center">
              {/* Image */}
              <div className="relative w-full h-[700px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/antonio.jpg"
                  alt={t.antonio.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
                    {t.antonio.name}
                  </h2>
                  <p className="text-xl md:text-2xl text-primary font-semibold uppercase tracking-wide">
                    {t.antonio.role}
                  </p>
                </div>

                <div className="space-y-6 text-muted-foreground">
                  <div className="bg-accent/20 p-6 rounded-none border-l-4 border-primary">
                    <p className="font-semibold text-secondary text-lg uppercase tracking-wide text-sm mb-2">
                      {t.expertiseLabel}
                    </p>
                    <p className="font-bold text-foreground text-base">
                      {t.antonio.education}
                    </p>
                  </div>

                  <p className="leading-relaxed text-lg text-foreground font-light">
                    {t.antonio.expertise}
                  </p>

                  <p className="leading-relaxed text-base text-foreground">
                    {t.antonio.experience}
                  </p>

                  <p className="leading-relaxed text-sm text-muted-foreground italic border-l-2 border-accent pl-4">
                    {t.antonio.recognition}
                  </p>

                  <div className="bg-secondary/5 p-6 rounded-none border-l-4 border-secondary">
                    <p className="text-sm font-medium text-secondary">
                      {t.antonio.qualifications}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
