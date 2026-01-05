"use client";

// app/components/Footer.tsx
import Link from "next/link";
import { User } from "lucide-react";
import { useFooterTranslations } from "../contexts/TranslationContext";

export default function Footer() {
  const { t } = useFooterTranslations();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-10 lg:py-12 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
        <p className="text-sm md:text-sm lg:text-base text-center md:text-left">
          © {new Date().getFullYear()} {t.studioName}. {t.copyright}
        </p>
        <div className="flex flex-row md:flex-row gap-4 md:gap-6 lg:gap-8 text-sm md:text-sm lg:text-base items-center">
          <Link
            href="/privacy"
            className="hover:underline hover:text-primary transition-colors"
          >
            {t.privacy}
          </Link>
          <Link
            href="/contatti"
            className="hover:underline hover:text-primary transition-colors"
          >
            {t.contacts}
          </Link>
          {/* Icona admin discreta */}
          <Link
            href="/login"
            className="text-gray-500 hover:text-primary transition-colors opacity-50 hover:opacity-100"
            title={t.adminArea}
          >
            <User size={16} className="md:size-5 lg:size-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
