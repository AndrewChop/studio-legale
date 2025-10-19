"use client";

import Link from "next/link";
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
  const [currentLang, setCurrentLang] = useState<'it' | 'en'>('it');

  const navigationItems: NavigationItem[] = [
    { href: "/", labelIt: "Home", labelEn: "Home" },
    { href: "/chi-siamo", labelIt: "Chi siamo", labelEn: "About Us" },
    { href: "/servizi", labelIt: "Servizi", labelEn: "Services" },
    { href: "/pubblicazioni", labelIt: "Pubblicazioni", labelEn: "Publications" },
    { href: "/contatti", labelIt: "Contatti", labelEn: "Contact" },
  ];

  const translations = {
    it: {
      studioName: "Studio Legale Amaranto",
      subtitle: "Consulenza legale professionale",
      bookConsultation: "Prenota Consulenza",
      menu: "Menu",
      changeLanguage: "Cambia lingua"
    },
    en: {
      studioName: "Amaranto Law Firm", 
      subtitle: "Professional legal advice",
      bookConsultation: "Book Consultation",
      menu: "Menu",
      changeLanguage: "Change language"
    }
  };

  const t = translations[currentLang];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = (lang: 'it' | 'en') => {
    setCurrentLang(lang);
  };

  const getLabel = (item: NavigationItem) => {
    return currentLang === 'it' ? item.labelIt : item.labelEn;
  };

  return (
    <header className="w-full border-b border-gray-200 shadow-sm bg-white sticky top-0 z-50">
      {/* Mobile Layout (< 768px) */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* Logo mobile */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">SL</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-gray-900 leading-tight">
              {t.studioName}
            </h1>
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
                className="p-2 hover:bg-gray-100"
                aria-label={t.changeLanguage}
              >
                <Globe className="h-5 w-5 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={() => handleLanguageChange('it')}
                className={currentLang === 'it' ? 'bg-gray-50' : ''}
              >
                🇮🇹 Italiano
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => handleLanguageChange('en')}
                className={currentLang === 'en' ? 'bg-gray-50' : ''}
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
                className="p-2 hover:bg-gray-100"
                aria-label={t.menu}
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-xl font-bold text-gray-900">
                  {t.studioName}
                </SheetTitle>
                <SheetDescription className="text-sm text-gray-600">
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
                    className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {getLabel(item)}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/contatti"
                  onClick={handleLinkClick}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {t.bookConsultation}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop/Tablet Layout (≥ 768px) */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        {/* Logo desktop */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl lg:text-2xl">SL</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
              {t.studioName}
            </h1>
            <span className="text-sm text-gray-600">
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
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
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
                className="ml-2 px-3 py-2 hover:bg-gray-50"
                aria-label={t.changeLanguage}
              >
                <Globe className="h-4 w-4 mr-2" />
                {currentLang.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={() => handleLanguageChange('it')}
                className={currentLang === 'it' ? 'bg-gray-50' : ''}
              >
                🇮🇹 Italiano
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => handleLanguageChange('en')}
                className={currentLang === 'en' ? 'bg-gray-50' : ''}
              >
                🇬🇧 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contatti"
            className="ml-4 px-4 lg:px-6 py-2 bg-gray-900 text-white text-sm lg:text-base font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            {t.bookConsultation}
          </Link>
        </nav>
      </div>
    </header>
  );
}