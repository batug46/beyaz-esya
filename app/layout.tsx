import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SearchProvider } from "@/context/SearchContext";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TechHome - Modern Beyaz Eşya",
  description: "Geleceğin teknolojisini estetikle buluşturan beyaz eşya deneyimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${syne.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SearchProvider>
            {children}
            <Analytics />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
