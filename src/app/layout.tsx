import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'jotai';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { theme } from './theme';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RECIPE AI',
  description: 'RECIPE AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          <Provider>
            <DefaultLayout>{children}</DefaultLayout>
          </Provider>
        </MantineProvider>
      </body>
    </html>
  );
}
