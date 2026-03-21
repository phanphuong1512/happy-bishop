import type { Metadata } from "next";
import { Comfortaa, Lexend, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--font-lexend",
});

const comfortaa = Comfortaa({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400"],
  variable: "--font-comfortaa",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-4",
});

export const metadata: Metadata = {
  title: "Happy Bishops",
  description: "Happy Bishops chess community website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${lexend.variable} ${comfortaa.variable} ${sourceSerif4.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
