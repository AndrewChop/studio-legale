"use client";

import Image from "next/image";
import Link from "next/link";
import { usePresentationTranslations } from "../contexts/TranslationContext";

export default function ChiSiamoPreview() {
  const { t } = usePresentationTranslations();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-10 lg:mb-12 text-center">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Avv. Marzia Amaranto */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <Image
              src="/marzia.jpg"
              alt="Avv. Marzia Amaranto"
              width={120}
              height={120}
              className="rounded-full object-cover w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30"
            />
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                {t.marzia.name}
              </h3>
              <p className="text-gray-700 font-semibold text-sm md:text-base mb-2">
                {t.marzia.role}
              </p>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                {t.marzia.description}
              </p>
            </div>
          </div>

          {/* Avv. Antonio Amaranto */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <Image
              src="/antonio.jpg"
              alt="Avv. Antonio Amaranto"
              width={120}
              height={120}
              className="rounded-full object-cover w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30"
            />
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                {t.antonio.name}
              </h3>
              <p className="text-gray-700 font-semibold text-sm md:text-base mb-2">
                {t.antonio.role}
              </p>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                {t.antonio.description}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-10 lg:mt-12">
          <Link
            href="/chi-siamo"
            className="text-sm md:text-base font-medium text-gray-800 underline hover:text-amber-600 transition-colors"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
