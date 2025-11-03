// app/components/Footer.tsx
import Link from "next/link";
import { User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-10 lg:py-12 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
        <p className="text-sm md:text-sm lg:text-base text-center md:text-left">
          © {new Date().getFullYear()} Studio Legale Amaranto. Tutti i diritti
          riservati.
        </p>
        <div className="flex flex-row md:flex-row gap-4 md:gap-6 lg:gap-8 text-sm md:text-sm lg:text-base items-center">
          <Link
            href="/privacy"
            className="hover:underline hover:text-amber-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contatti"
            className="hover:underline hover:text-amber-400 transition-colors"
          >
            Contatti
          </Link>
          {/* Icona admin discreta */}
          <Link
            href="/login"
            className="text-gray-500 hover:text-amber-400 transition-colors opacity-50 hover:opacity-100"
            title="Area Amministratore"
          >
            <User size={16} className="md:size-5 lg:size-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
