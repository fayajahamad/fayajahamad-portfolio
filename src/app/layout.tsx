import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FAF7F2" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: `${profile.displayName} | Software, Networks & Security`, template: `%s | ${profile.displayName}` },
  description: `Portfolio of ${profile.fullName}, a third-year Network Engineering undergraduate at NSBM Green University with projects in networks, security and automation.`,
  applicationName: "Fayaj Ahamad Portfolio",
  authors: [{ name: profile.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.displayName} — Software, Networks & Security`,
    description: "Practical projects in Python, network engineering and cybersecurity.",
    url: "/", siteName: `${profile.displayName} Portfolio`, locale: "en_LK", type: "website"
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org", "@type": "Person", name: profile.fullName,
    url: siteUrl(), sameAs: [profile.github, ...(profile.linkedin ? [profile.linkedin] : [])],
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.university },
    description: profile.role,
  };
  return (
    <html lang="en">
      <body>
          <a className="skip-link" href="#main">Skip to main content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
