import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanay Jagadeesh | Software Engineer",
  description:
    "Software engineer building production AI systems, data infrastructure, and developer tools. University of Waterloo, Management Engineering.",
  keywords: [
    "Tanay Jagadeesh",
    "Software Engineer",
    "Data Scientist",
    "Machine Learning",
    "Management Engineering",
    "University of Waterloo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
