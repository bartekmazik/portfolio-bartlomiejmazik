import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const lexend = Lexend({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bartlomiejmazik.dev"),
  title: "Bartłomiej Mazik - Fullstack Developer",
  description: "Portfolio",
  keywords: [
    "Next.js",
    "Nest.js",
    "Web Developer",
    "Portfolio",
    "Fullstack Developer",
  ],
  openGraph: {
    title: "Bartłomiej Mazik",
    description: "Portfolio",
    url: "https://bartlomiejmazik.dev",
    images: [
      {
        url: "https://bartlomiejmazik.dev/opengraph-image.png",
        secureUrl: "https://bartlomiejmazik.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio",
      },
    ],
    type: "website",
    siteName: "Bartłomiej Mazik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartłomiej Mazik",
    description: "Portfolio",
    images: ["https://bartlomiejmazik.dev/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} bg-white antialiased scroll-smooth `}
      >
        <Navbar />
        <div className="pt-[10vh] bg-background">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
