// app/components/ContattiCTA.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContattiCTA() {
  return (
    <section className="py-20 bg-color-accent border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contattaci</h2>
        <p className="text-gray-700 mb-8">
          Siamo disponibili per consulenze legali su appuntamento. Non esitare a contattarci.
        </p>

        <div className="flex flex-col gap-4 items-center text-gray-700 mb-10">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+39 338 347 0581</span>
            <span>+39 366 914 1424</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>studiolegaleamaranto@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Via Bugatti 33, 56022 Castelfranco di Sotto (PI)</span>
          </div>
        </div>

        <Link
          href="/contatti"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Prenota una consulenza
        </Link>
      </div>
    </section>
  );
}