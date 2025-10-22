import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Footer from "../components/footer";
import "@/styles/globals.css";
import ClientSessionProvider from "../components/ClientSessionProvider";
import { TranslationProvider } from "../contexts/TranslationContext";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body>
        <TranslationProvider>
          <ClientSessionProvider>
            <ResponsiveNavbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ClientSessionProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
