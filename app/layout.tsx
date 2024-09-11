import type { Metadata } from "next";
import { Noto_Sans_NKo_Unjoined, Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const noto_Sans_NKo_Unjoined = Noto_Sans_NKo_Unjoined({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artesanal App",
  description: "Development by artesanal.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={noto_Sans_NKo_Unjoined.className}>{children}</body>
    </html>
  );
}
