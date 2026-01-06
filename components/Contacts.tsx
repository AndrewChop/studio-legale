"use client";

// app/components/ContattiCTA.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useContactsTranslations } from "../contexts/TranslationContext";

export default function ContattiCTA() {
  const { t } = useContactsTranslations();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-color-accent border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-xs md:max-w-2xl lg:max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">
          {t.title}
        </h2>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 lg:mb-10">
          {t.subtitle}
        </p>

        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 items-center text-gray-700 text-sm md:text-base lg:text-lg mb-8 md:mb-10 lg:mb-12">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <Phone className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <a
                href="https://wa.me/393383470581"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline transition-colors cursor-pointer"
              >
                +39 338 347 0581
              </a>
              <a
                href="https://wa.me/393669141424"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline transition-colors cursor-pointer"
              >
                +39 366 914 1424
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <Mail className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <a
              href="mailto:studiolegaleamaranto@gmail.com"
              className="break-all md:break-normal hover:text-primary hover:underline transition-colors cursor-pointer"
            >
              studiolegaleamaranto@gmail.com
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
            <a
              href="https://maps.google.com/maps?q=Via+Bugatti+33,+56022+Castelfranco+di+Sotto+(PI),+Italy"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-xs md:max-w-none hover:text-primary hover:underline transition-colors cursor-pointer"
            >
              Via Bugatti 33, 56022 Castelfranco di Sotto (PI)
            </a>
          </div>
        </div>

        <Link
          href="/prenota-consulenza"
          className="min-h-14 bg-gray-900 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg font-medium text-sm md:text-base lg:text-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
        >
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
