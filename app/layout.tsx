import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientOnly } from "@/components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrian Calicdan - IT Specialist",
  description: "IT Specialist portfolio showcasing experience in system administration, networking, and technical support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <ClientOnly>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}