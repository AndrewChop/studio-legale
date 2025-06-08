import Image from "next/image";
import Link from "next/link";

export default function ChiSiamoPreview() {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Chi siamo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Avv. Marzia Amaranto */}
          <div className="flex items-center gap-4">
            <Image
              src="/marzia.jpg"
              alt="Avv. Marzia Amaranto"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Avv. Marzia Amaranto
              </h3>
              <p className="text-gray-700 text-sm">
                Specializzata in diritto civile e familiare. Attiva su tutela
                del minore, separazioni e mediazione.
              </p>
            </div>
          </div>

          {/* Avv. Antonio Amaranto */}
          <div className="flex items-center gap-4">
            <Image
              src="./src/logo.svg"
              alt="Avv. Antonio Amaranto"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Avv. Antonio Amaranto
              </h3>
              <p className="text-gray-700 text-sm">
                Esperto in diritto penale e amministrativo militare. Oltre 20
                anni di esperienza nella difesa.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/chi-siamo"
            className="text-sm font-medium text-gray-800 underline hover:text-gray-600"
          >
            Scopri di più sul nostro team →
          </Link>
        </div>
      </div>
    </section>
  );
}