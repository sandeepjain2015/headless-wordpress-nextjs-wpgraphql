import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agra Properties",
  description: "Premium real estate in Agra",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
    <head>
        <link rel="stylesheet" href="/fonts/icomoon/style.css" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
       <Footer />
      </body>
    </html>
  );
}
