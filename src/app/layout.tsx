import { PrimaryLayout } from '@/components';
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: 'white',
};
export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Beautiful Portfolio',
  description: 'Dynamic Website Portfolio',
  icons: {
    apple: '/images/icon.ico',
  },
};
export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <PrimaryLayout>{children}</PrimaryLayout>;
};
export default RootLayout;
