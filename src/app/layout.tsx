import { PrimaryLayout } from '@/components';
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import type { Viewport } from 'next';
import { Socials } from '@/enums';
export const viewport: Viewport = {
  themeColor: 'white',
};
export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: "Alex's Portfolio | Designer & Developer",
  description: 'Dynamic Website Portfolio',
  icons: {
    apple: '/images/logo.png',
    icon: '/images/logo.png',
  },
  metadataBase: new URL(Socials.BASE_URL),
  openGraph: {
    title: "Alex's Portfolio | Designer & Developer",
    description:
      "Hi, I'm Alex, a UI/UX designer and front-end developer. My mission is to craft dynamic, memorable websites that drive increased traffic.",
    type: 'website',
    locale: 'en_US',
    url: Socials.BASE_URL,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${Socials.BASE_URL}/images/opengraph-image.png`,
        alt: "Alex's Portfolio",
      },
    ],
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
