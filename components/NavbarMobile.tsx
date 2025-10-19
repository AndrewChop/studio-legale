"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
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

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/servizi", label: "Servizi" },
    { href: "/pubblicazioni", label: "Pubblicazioni" },
    { href: "/contatti", label: "Contatti" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full border-b border-gray-200 shadow-sm bg-white sticky top-0 z-50">
      {/* Mobile Layout (default) */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:hidden">
        {/* Logo compatto mobile */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Logo Studio Legale"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-gray-900 leading-tight">
              Studio Legale
            </h1>
            <span className="text-xs text-gray-600 leading-tight">
              Amaranto
            </span>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-gray-100"
              aria-label="Apri menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 sm:w-96">
            <SheetHeader className="text-left mb-8">
              <SheetTitle className="text-xl font-bold text-gray-900">
                Studio Legale Amaranto
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-600">
                Consulenza e assistenza legale professionale
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
                  {item.label}
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
                Prenota Consulenza
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Tablet/Desktop Layout */}
      <div className="hidden md:flex container mx-auto px-6 py-4 items-center justify-between">
        {/* Logo desktop */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="Logo Studio Legale"
            width={60}
            height={60}
            className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
              Studio Legale Amaranto
            </h1>
            <span className="text-sm text-gray-600">
              Consulenza legale professionale
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
              {item.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="ml-4 px-4 lg:px-6 py-2 bg-gray-900 text-white text-sm lg:text-base font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}
