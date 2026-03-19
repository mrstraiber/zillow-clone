import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// google fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// local fonts
const objectSans = localFont({
  src: '/_fonts/object-sans-heavy.woff2',
  variable: '--font-object',
});

export const metadata: Metadata = {
  title: 'Zillow Clone',
  description: 'Real Estate Marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${objectSans.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  );
}
