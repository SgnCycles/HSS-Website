import type { Metadata } from "next";
import "../globals.css";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


export const metadata: Metadata = {
  title: "Hässelby Strands sjöscoutkår",
  description: "Välkommen till Hässelby Strand Sjöscoutkår",
};

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
}>) 
{

const { locale } = await params;
const messages = await getMessages();
  return (
    <html
      lang={locale} suppressHydrationWarning className={`h-full antialiased ${bricolageGrotesque.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-full flex flex-col">
      <NextIntlClientProvider messages={messages}>
        <Header />
        {children}
      </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}