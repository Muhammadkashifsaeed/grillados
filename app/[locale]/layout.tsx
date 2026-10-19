import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans, Poppins, Albert_Sans } from "next/font/google";
import "../globals.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { MobileOrderButton } from "../components/MobileOrderButton";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getSiteUrl } from '../utils/seo';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  // Dynamically resolve siteUrl: matches localhost in dev/audit and production domain in live deployment
  const siteUrl = await getSiteUrl();

  const titleDefault = t('title');
  const description = t('description');
  const keywords = t('keywords').split(', ');

  return {
    metadataBase: new URL(siteUrl),
    alternates: { 
      canonical: locale === 'fr' ? '/fr' : '/',
      languages: {
        'en': '/',
        'fr': '/fr',
        'x-default': '/',
      },
    },
    robots: { index: true, follow: true },
    title: {
      template: "%s | GRILLADOS | BEEF BACK RIBS & CHICKEN IN CANADA",
      default: "GRILLADOS | BEEF BACK RIBS & CHICKEN IN CANADA",
    },
    description: description,
    keywords: keywords,
    authors: [{ name: "GRILLADO'S" }],
    creator: "GRILLADO'S",
    publisher: "GRILLADO'S",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    applicationName: "GRILLADO'S",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "GRILLADO'S",
    },
    icons: {
      icon: "/images/13332603_transparent.png",
      apple: "/images/13332603_transparent.png",
    },
    openGraph: {
      title: titleDefault,
      description: description,
      url: locale === 'fr' ? '/fr' : '/',
      siteName: "GRILLADO'S",
      images: [
        {
          url: "/images/hero-bg-new.png",
          width: 1200,
          height: 630,
          alt: "GRILLADO'S",
        },
      ],
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description: description,
      images: ["/images/hero-bg-new.png"],
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#EB5250',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  let messages;
  try {
    messages = await getMessages();
  } catch {
    notFound();
  }

  const siteUrl = await getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Grillado's",
    "image": `${siteUrl}/images/hero-bg-new.png`,
    "url": siteUrl,
    "priceRange": "$$",
    "servesCuisine": ["Portuguese", "Grilled Chicken", "Steak"],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Cambridge",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Milton",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Mississauga",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Laval",
        "addressRegion": "QC",
        "addressCountry": "CA"
      }
    ]
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${notoSans.variable} ${poppins.variable} ${albertSans.variable} antialiased font-sans`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#1A1410]" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <MobileOrderButton />
          <main className="flex-1 pt-0 bg-[#1A1410]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
