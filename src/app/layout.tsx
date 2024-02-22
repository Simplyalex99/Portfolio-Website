import { PrimaryLayout } from '@/components';
import type { Metadata } from 'next';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  icons: {
    apple: '/images/logo.png',
  },
  themeColor: '#FFFFFF',
};
export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <PrimaryLayout>{children}</PrimaryLayout>;
};
export default RootLayout;
