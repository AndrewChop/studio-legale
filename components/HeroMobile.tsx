import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroMobile() {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 border-b border-gray-200">
      <div className="container mx-auto px-4 text-center">
        {/* Title - Mobile First */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Difendiamo i tuoi diritti con competenza e serietà
        </h1>
        
        {/* Subtitle - Responsive */}
        <p className="text-base sm:text-lg text-gray-700 max-w-xl lg:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          Lo Studio Legale Amaranto offre consulenza e assistenza legale in ambito civile, penale e amministrativo militare.
        </p>
        
        {/* CTA Button - Touch Friendly */}
        <Link href="/contatti">
          <Button 
            size="lg"
            className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 text-base sm:text-lg font-medium bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Prenota una consulenza
          </Button>
        </Link>
        
        {/* Trust indicators for mobile */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Consulenza gratuita</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Risposta entro 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}