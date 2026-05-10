import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { NavHeader } from "@/app/components/nav-header";
import { Footer } from "@/app/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brew and Go — Specialty Coffee in London",
  description:
    "A cozy neighborhood coffee shop in London serving specialty coffee, fresh pastries, and light lunches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
