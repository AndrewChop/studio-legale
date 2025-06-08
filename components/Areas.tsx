// app/components/AreeAttivita.tsx
export default function AreeAttivita() {
    const aree = [
      {
        titolo: "Diritto Penale",
        descrizione: "Difesa in procedimenti penali, reati comuni e militari.",
      },
      {
        titolo: "Diritto Civile",
        descrizione: "Contratti, proprietà, risarcimenti, successioni.",
      },
      {
        titolo: "Diritto di Famiglia",
        descrizione: "Separazioni, divorzi, tutela minori e affido.",
      },
      {
        titolo: "Amministrativo Militare",
        descrizione: "Tutela dei diritti del personale militare e ricorsi.",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Aree di Attività
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {aree.map((area) => (
              <div
                key={area.titolo}
                className="bg-white rounded-lg shadow p-6 border hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {area.titolo}
                </h3>
                <p className="text-gray-600 text-sm">{area.descrizione}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }