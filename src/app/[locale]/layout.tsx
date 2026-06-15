import type { Metadata } from "next";
import "../globals.css";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home");
  return {
    title: `${t("metaTitle")}`,
    description: `${t("metaDescription")}`,
  };
}

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`h-full antialiased ${bricolageGrotesque.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only z-50 focus:absolute h-5 focus:not-sr-only top-0 focus:bg-primary focus:text-background"
        >
          hoppa till huvudinnehåll
        </a>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
