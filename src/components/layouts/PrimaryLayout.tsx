import React from 'react';
import { inter } from '@/fonts';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

export const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default PrimaryLayout;
