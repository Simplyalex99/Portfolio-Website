import React from 'react';
import Head from 'next/head';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}
export const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Head>
            <title>Beautiful Portfolio</title>
          </Head>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default PrimaryLayout;
