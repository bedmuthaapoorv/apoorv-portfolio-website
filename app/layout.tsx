import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_URL, profile } from "@/data/profile";
import "./globals.css";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} — Full-stack Engineer`,
  description: profile.description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: SITE_URL }],
  openGraph: {
    type: "profile",
    url: "/",
    title: `${profile.name} — Full-stack Engineer`,
    description: profile.description,
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: `${profile.name} — Full-stack Engineer`, description: profile.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0c0f" },
    { media: "(prefers-color-scheme: light)", color: "#0a0c0f" },
  ],
};

// Runs before paint: applies the saved theme (dark is the default) and flags JS for reveal animations.
const themeInit = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${plex.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
