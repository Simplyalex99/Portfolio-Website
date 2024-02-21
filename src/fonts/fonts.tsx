import { Inter, Playfair_Display, Playfair_Display_SC } from 'next/font/google';
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const playfairSC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400'],
});

export const playfair = Playfair_Display({
  style: ['italic', 'normal'],
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default inter;
