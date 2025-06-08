import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 shadow-sm bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={"./src/logo2.svg"}
            alt={"Logo"}
            width={50}
            height={50}
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl font-semibold text-gray-900 tracking-wide">
            Studio Legale Amaranto
          </h1>
        </div>
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/servizi">Servizi</Link>
          <Link href="/pubblicazioni">Pubblicazioni</Link>
          <Link href="/contatti">Contatti</Link>
        </nav>
      </div>
    </header>
  );
}
