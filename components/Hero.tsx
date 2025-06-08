export default function Hero() {
    return (
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Difendiamo i tuoi diritti con competenza e serietà
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Lo Studio Legale Amaranto offre consulenza e assistenza legale in ambito civile, penale e amministrativo militare.
          </p>
          <a
            href="/contatti"
            className="inline-block px-6 py-3 text-white bg-gray-900 hover:bg-gray-800 rounded-lg font-medium transition"
          >
            Prenota una consulenza
          </a>
        </div>
      </section>
    );
  }