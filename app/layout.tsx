import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './utils/theme-context';

const inter = Inter({ subsets: ['latin'] });
const pjs = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zeepay Analytic Dashboard',
  description: 'Zeepay Analytic Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
