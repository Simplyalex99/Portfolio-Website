import { PrimaryLayout } from '@/components';
import '@/styles/globals.scss';

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <PrimaryLayout>{children}</PrimaryLayout>;
};
export default RootLayout;
