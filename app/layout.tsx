import Navbar from "../components/Navbar";
import "./../styles/globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children} </main>
      </body>
    </html>
  );
}
