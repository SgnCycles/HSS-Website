import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Nav from "@/components/cards/Nav";

export const metadata: Metadata = {
  title: "Hässelby Strands sjöscoutkår",
  description: "Välkommen till Hässelby Strand Sjöscoutkår",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={`h-full antialiased ${bricolageGrotesque.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-full flex flex-col">
       <Nav items={[]} />
      {children}
      </body>
    </html>
  );
}