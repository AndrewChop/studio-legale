// app/components/Footer.tsx
import Link from "next/link";
import { User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Studio Legale Amaranto. Tutti i diritti riservati.
        </p>
        <div className="flex gap-6 text-sm items-center">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/contatti" className="hover:underline">Contatti</Link>
          {/* Icona admin discreta */}
          <Link 
            href="/login" 
            className="text-gray-500 hover:text-gray-300 transition-colors opacity-50 hover:opacity-100"
            title="Area Amministratore"
          >
            <User size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}