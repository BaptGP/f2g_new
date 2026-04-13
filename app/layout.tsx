import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F2G - Funny Gellyball Game | Activités de loisirs",
  description:
    "Découvrez nos activités de loisirs : Archery Tag, Gellyball, Jeu de Cornhole, Lancée de Hache et Paintball Kid's. Pour particuliers, entreprises et collectivités.",
  keywords: [
    "F2G",
    "Funny Gellyball Game",
    "Archery Tag",
    "Gellyball",
    "Paintball",
    "Cornhole",
    "Lancée de Hache",
    "activités loisirs",
    "team building",
    "anniversaire",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
