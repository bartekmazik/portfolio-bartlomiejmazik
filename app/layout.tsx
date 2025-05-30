import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const lexend = Lexend({
  weight: ["500", "700"],
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
      <body className={`${lexend.className} bg-background antialiased`}>
        <Navbar />
        <div className="pt-[10vh]">{children}</div>
      </body>
    </html>
  );
}
