"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Globe, Mail } from "lucide-react";
import { useState } from "react";
import {
  useNavbarTranslations,
  useTranslations,
} from "../contexts/TranslationContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { currentLang, setLanguage, t: navT } = useNavbarTranslations();
  const { t } = useTranslations();

  // Ottieni i navigation items dai JSON - con type safety
  const navigationItems = Object.values(navT.navigation as Record<string, { href: string; label: string }>) || [];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = (lang: "it" | "en") => {
    console.log("Changing language to:", lang);
    setLanguage(lang);
    setIsLangDropdownOpen(false); // Chiude il dropdown dopo la selezione
  };

  return (
    <>
      {/* Navbar Unificata - Top Bar + Main Navbar */}
      <div className="w-full fixed top-0 z-50 shadow-sm">
        {/* Top Bar - Contact Info */}
        <div className="w-full bg-muted-foreground text-primary-foreground py-2 px-4">
          <div className="container mx-auto flex items-center justify-between text-sm">
            <span className="font-medium whitespace-nowrap truncate flex-1 text-[8px] md:text-[10px] lg:text-sm mr-2 md:mr-4">
              {t("topbar.message")}
            </span>
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6 flex-shrink-0">
              <a
                href={`https://wa.me/${t("topbar.phone")
                  .replace(/\s/g, "")
                  .replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 md:gap-2 hover:text-primary transition-colors"
              >
                <WhatsAppIcon className="h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4" />
                <span className="hidden md:inline lg:inline text-[10px] lg:text-sm whitespace-nowrap">
                  {t("topbar.phone")}
                </span>
              </a>
              <a
                href={`mailto:${t("topbar.email")}`}
                className="flex items-center gap-1 md:gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4" />
                <span className="hidden md:inline lg:inline text-[10px] lg:text-sm whitespace-nowrap">
                  {t("topbar.email")}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar - Dentro lo stesso contenitore */}
        <div className="w-full border-b border-border bg-background">
          <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              {/* Logo - Responsive Sizes */}
              <Link
                href="/"
                className="flex items-center gap-10 md:gap-12 lg:gap-14 pl-8 md:pl-10"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 relative flex-shrink-0">
                  <Image
                    src="/logo.svg"
                    alt="Studio Legale Amaranto"
                    fill
                    className="object-contain"
                    style={{ scale: 4 }}
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <h1 className="text-xs md:text-sm lg:text-xl font-bold text-foreground leading-tight">
                    {navT.studioName}
                  </h1>
                  <span className="text-xs md:text-xs lg:text-sm text-muted-foreground leading-tight">
                    {navT.subtitle}
                  </span>
                </div>
              </Link>

              <div className="flex flex-row gap-6">
                {/* Desktop Navigation Links - Hidden on Mobile/Tablet */}
                <nav className="hidden lg:flex items-center space-x-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-base font-bold text-accent-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center space-x-2">
                  {/* Language Selector with Hover + Click */}
                  <div
                    className="relative group"
                    onMouseEnter={() => setIsLangDropdownOpen(true)}
                    onMouseLeave={() => setIsLangDropdownOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:text-primary font-bold cursor-pointer"
                      aria-label={navT.changeLanguage}
                      onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    >
                      <Globe className="h-5 w-5 text-muted-foreground" />
                    </Button>

                    {/* Dropdown - Visible on Hover OR Click */}
                    <div
                      className={`absolute right-0 top-full mt-1 w-44 bg-white border shadow-lg rounded-md transition-all duration-200 z-[60] ${
                        isLangDropdownOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <div
                        onClick={() => handleLanguageChange("it")}
                        className={`cursor-pointer flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 ${
                          currentLang === "it"
                            ? "border-l-4 border-primary text-primary font-bold"
                            : ""
                        }`}
                      >
                        <span className="text-base">🇮🇹</span>
                        <span>Italiano</span>
                      </div>
                      <div
                        onClick={() => handleLanguageChange("en")}
                        className={`cursor-pointer flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 ${
                          currentLang === "en"
                            ? "border-l-4 border-amber-500 text-amber-600 font-medium"
                            : ""
                        }`}
                      >
                        <span className="text-base">🇬🇧</span>
                        <span>English</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile/Tablet Menu - Hidden on Desktop */}
                  <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                      <SheetTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2 hover:bg-muted"
                        >
                          <Menu className="h-6 w-6 text-foreground" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent
                        side="right"
                        className="w-80 sm:w-96 bg-card"
                      >
                        <SheetHeader className="text-left mb-8">
                          {/* Logo + Studio Info */}
                          <div className="flex items-center gap-10 pl-5">
                            <div className="w-12 h-12 relative flex-shrink-0">
                              <Image
                                src="/logo.png"
                                alt="Studio Legale Amaranto"
                                fill
                                className="object-contain"
                                style={{ scale: 2.5 }}
                              />
                            </div>
                            <div className="flex flex-col">
                              <SheetTitle className="text-xl font-bold text-card-foreground leading-tight">
                                {navT.studioName}
                              </SheetTitle>
                              <SheetDescription className="text-sm text-muted-foreground leading-tight">
                                {navT.subtitle}
                              </SheetDescription>
                            </div>
                          </div>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-1">
                          {navigationItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center px-4 py-3 text-base font-bold text-accent-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </nav>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
