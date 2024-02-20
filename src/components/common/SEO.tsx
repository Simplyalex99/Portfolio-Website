import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#FFF" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/logo.png" />
    </Head>
  );
};

export default SEO;
