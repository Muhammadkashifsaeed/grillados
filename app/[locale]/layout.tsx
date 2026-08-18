import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { MobileOrderButton } from "../components/MobileOrderButton";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Grillado's",
    default: "Grillado's | Premium Grilled Chicken & Portuguese Flavours",
  },
  description: "Experience the ultimate taste of premium grilled chicken, sizzling steaks, and authentic Portuguese flavours at Grillado's. Order online for pickup, delivery, or catering.",
  keywords: ["Grillado's", "grilled chicken", "peri peri chicken", "restaurant", "Portuguese food", "catering", "order online", "halal", "steaks"],
  authors: [{ name: "Grillado's" }],
  creator: "Grillado's",
  publisher: "Grillado's",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/13332603_transparent.png",
    apple: "/images/13332603_transparent.png",
  },
  openGraph: {
    title: "Grillado's | Premium Grilled Chicken & Portuguese Flavours",
    description: "Experience the ultimate taste of premium grilled chicken, sizzling steaks, and authentic Portuguese flavours at Grillado's.",
    url: "https://grillados.ca",
    siteName: "Grillado's",
    images: [
      {
        url: "/images/hero-bg-new.png",
        width: 1200,
        height: 630,
        alt: "Grillado's Premium Fast Food Spread",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grillado's | Premium Grilled Chicken",
    description: "Experience the ultimate taste of premium grilled chicken, sizzling steaks, and authentic flavours at Grillado's.",
    images: ["/images/hero-bg-new.png"],
  },
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

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <MobileOrderButton />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
