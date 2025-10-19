import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "@/styles/globals.css";
import ClientSessionProvider from "../components/ClientSessionProvider";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body>
        <ClientSessionProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </ClientSessionProvider>
      </body>
    </html>
  );
}
