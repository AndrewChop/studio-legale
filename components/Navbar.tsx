// app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full h-[200px] border-b border-gray-200 shadow-sm bg-color-accent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.svg"
            alt="Logo Studio Legale"
            width={100}
            height={100}
            className="h-44 w-full object-contain"
          />
          <h1 className="text-xl font-heading text-brand-gold tracking-wide">
            Studio Legale Amaranto
          </h1>
        </div>
        <nav className="flex space-x-6 text-sm font-medium text-brand-blueDark">
          <Link href="/" className="hover:text-brand-goldLight transition">Home</Link>
          <Link href="/chi-siamo" className="hover:text-brand-goldLight transition">Chi siamo</Link>
          <Link href="/servizi" className="hover:text-brand-goldLight transition">Servizi</Link>
          <Link href="/pubblicazioni" className="hover:text-brand-goldLight transition">Pubblicazioni</Link>
          <Link href="/contatti" className="hover:text-brand-goldLight transition">Contatti</Link>
        </nav>
      </div>
    </header>
  );
}