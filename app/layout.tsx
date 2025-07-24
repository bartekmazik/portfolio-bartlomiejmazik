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
  title: "Bartłomiej Mazik",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} bg-background antialiased scroll-smooth `}
      >
        <Navbar />
        <div className="pt-[10vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
