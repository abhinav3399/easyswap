import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasySwap - Swap Homes. Not Just Rooms.",
  description:
    "Affordable and verified room exchange platform for students and professionals. AI-powered matching, verified users, and safe communication.",
  keywords: [
    "room exchange",
    "student housing",
    "professional housing",
    "room swap",
    "verified rooms",
    "AI matching",
  ],
  openGraph: {
    title: "EasySwap - Swap Homes. Not Just Rooms.",
    description:
      "Affordable and verified room exchange platform for students and professionals.",
    type: "website",
    siteName: "EasySwap",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasySwap - Swap Homes. Not Just Rooms.",
    description:
      "Affordable and verified room exchange platform for students and professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
