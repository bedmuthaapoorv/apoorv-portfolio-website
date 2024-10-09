import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Apoorv Bedmutha - Portfolio",
  description:
    "Apoorv Bedmutha is a MTech with Honors from IIIT Gwalior, 1.2 years professional experience in Backend, Frontend and Full-Stack development roles, SDE @ hushh.ai, Top 16% coder globally @ Leetcode, GATE Qualified with All India Rank 8028",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
