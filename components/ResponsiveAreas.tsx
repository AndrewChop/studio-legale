"use client";

import Link from "next/link";
import { Scale, Users, Heart, Building } from "lucide-react";
import { useAreasTranslations } from "../contexts/TranslationContext";

export default function ResponsiveAreas() {
  const { t } = useAreasTranslations();

  const areas = [
    {
      ...t.civil,
      icon: "users",
      href: "/area/diritto-civile",
    },
    {
      ...t.criminal,
      icon: "scale",
      href: "/area/diritto-penale",
    },
    {
      ...t.family,
      icon: "heart",
      href: "/area/diritto-famiglia",
    },
    {
      ...t.condo,
      icon: "building",
      href: "/area/diritto-condominiale",
    },
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8 md:w-10 md:h-10 text-primary";
    switch (iconName) {
      case "users":
        return <Users className={iconClass} />;
      case "scale":
        return <Scale className={iconClass} />;
      case "heart":
        return <Heart className={iconClass} />;
      case "building":
        return <Building className={iconClass} />;
      default:
        return <Scale className={iconClass} />;
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <Link
              key={area.title}
              href={area.href}
              className="block bg-card rounded-xl shadow-sm border border-border p-6 md:p-8 hover:shadow-md hover:border-primary/20 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon and Title */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  {getIcon(area.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {area.description}
              </p>

              {/* Visual indicator */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="w-12 h-1 bg-gradient-to-r from-primary/60 to-primary rounded-full group-hover:from-primary group-hover:to-primary/80 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-12 lg:mt-16">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {t.ctaText}
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm md:text-base"
          >
            {t.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
