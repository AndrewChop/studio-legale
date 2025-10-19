"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface NavigationItem {
  href: string;
  labelIt: string;
  labelEn: string;
}

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"it" | "en">("it");

  const navigationItems: NavigationItem[] = [
    { href: "/", labelIt: "Home", labelEn: "Home" },
    { href: "/chi-siamo", labelIt: "Chi siamo", labelEn: "About Us" },
    { href: "/servizi", labelIt: "Servizi", labelEn: "Services" },
    {
      href: "/pubblicazioni",
      labelIt: "Pubblicazioni",
      labelEn: "Publications",
    },
    { href: "/contatti", labelIt: "Contatti", labelEn: "Contact" },
  ];

  const translations = {
    it: {
      studioName: "Studio Legale",
      subtitle: "Amaranto",
      bookConsultation: "Prenota Consulenza",
      menu: "Menu",
      changeLanguage: "Cambia lingua",
    },
    en: {
      studioName: "Law Firm",
      subtitle: "Amaranto",
      bookConsultation: "Book Consultation",
      menu: "Menu",
      changeLanguage: "Change language",
    },
  };

  const t = translations[currentLang];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = (lang: "it" | "en") => {
    setCurrentLang(lang);
  };

  const getLabel = (item: NavigationItem) => {
    return currentLang === "it" ? item.labelIt : item.labelEn;
  };

  return (
    <header className="w-full border-b border-border shadow-sm bg-background sticky top-0 z-50">
      {/* Mobile Layout (< 768px) */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* Logo mobile - più piccolo */}
        <Link href="/" className="flex items-center gap-8 pl-6">
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.png"
              alt="Studio Legale Amaranto"
              fill
              className="object-contain"
              style={{ scale: 3 }}
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-xs font-bold text-foreground leading-tight">
              {t.studioName}
            </h1>
            <span className="text-xs text-muted-foreground leading-tight">
              {t.subtitle}
            </span>
          </div>
        </Link>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-2">
          {/* Language Selector Mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-muted"
                aria-label={t.changeLanguage}
              >
                <Globe className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-popover border-border shadow-lg"
            >
              <DropdownMenuItem
                onClick={() => handleLanguageChange("it")}
                className={
                  currentLang === "it" ? "bg-accent text-accent-foreground" : ""
                }
              >
                🇮🇹 Italiano
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("en")}
                className={
                  currentLang === "en" ? "bg-accent text-accent-foreground" : ""
                }
              >
                🇬🇧 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Hamburger Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-muted"
                aria-label={t.menu}
              >
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96 bg-card">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-xl font-bold text-card-foreground">
                  {t.studioName}
                </SheetTitle>
                <SheetDescription className="text-sm text-muted-foreground">
                  {t.subtitle}
                </SheetDescription>
              </SheetHeader>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {getLabel(item)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop/Tablet Layout (≥ 768px) */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        {/* Logo desktop */}
        <Link href="/" className="flex items-center gap-16 pl-12">
          <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
            <Image
              src="/logo.png"
              alt="Studio Legale Amaranto"
              fill
              className="object-contain"
              style={{ scale: 4 }}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm lg:text-lg font-bold text-foreground leading-tight">
              {t.studioName}
            </h1>
            <span className="text-sm lg:text-md text-muted-foreground">
              {t.subtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center space-x-1 lg:space-x-2">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {getLabel(item)}
            </Link>
          ))}

          {/* Language Selector Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 px-3 py-2 hover:bg-muted"
                aria-label={t.changeLanguage}
              >
                <Globe className="h-4 w-4 mr-2" />
                {currentLang.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-popover border-border shadow-lg"
            >
              <DropdownMenuItem
                onClick={() => handleLanguageChange("it")}
                className={
                  currentLang === "it" ? "bg-accent text-accent-foreground" : ""
                }
              >
                🇮🇹 Italiano
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("en")}
                className={
                  currentLang === "en" ? "bg-accent text-accent-foreground" : ""
                }
              >
                🇬🇧 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
