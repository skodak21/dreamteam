import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

import { inter } from "@/app/ui/fonts";
import { TextLink } from "@uxf/ui/text-link";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ski-O Dream Team",
  description: "Join the show and rock the snow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <header className="h-20 border-b border-white/30 flex items-center justify-between px-4">
          <div className="container">
            <Link href="/prices">Prices</Link>
          </div>
        </header>
        <main className="flex flex-col p-24">{children}</main>
      </body>
    </html>
  );
}
