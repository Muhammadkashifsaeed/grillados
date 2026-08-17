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
  title: "Grillado's",
  description: "Premium Restaurant",
  icons: {
    icon: "/images/13332603_transparent.png",
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
