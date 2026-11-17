import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-display" });
const mono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], display: "swap", variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: `${site.name} — Network & Security Engineering`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: `${site.name} — Engineering Portfolio`,
  alternates: { canonical: "/" },
  openGraph: { title: `${site.name} — Network & Security Engineering`, description: site.description, type: "website", url: site.siteUrl, siteName: site.name },
  twitter: { card: "summary_large_image", title: `${site.name} — Network & Security Engineering`, description: site.description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#09100e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${mono.variable}`} id="top">
    <a className="skip-link" href="#main">Skip to content</a>
    <Header/>
    <main id="main">{children}</main>
    <Footer/>
    <CommandPalette/>
  </body></html>;
}
