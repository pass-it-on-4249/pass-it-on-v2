import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pass It On",
  description: "Marketplace for Donated Items.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MK7XH31FM1"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MK7XH31FM1');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className={`${plus_jakarta_sans.className} bg-white text-stone-900 relative`}>
        {children}
      </body>
    </html>
  );
}
