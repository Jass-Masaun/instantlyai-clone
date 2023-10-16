import { Toaster } from '@/components/ui/toaster';
import './globals.css';

import localFont from 'next/font/local';

const averta = localFont({
  src: [
    {
      path: '../public/fonts/averta/Averta-Thin.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/averta/Averta-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/averta/Averta-Medium.ttf',
      weight: '500',
    },
    {
      path: '../public/fonts/averta/Averta-Semibold.ttf',
      weight: '600',
    },
    {
      path: '../public/fonts/averta/Averta-Bold.ttf',
      weight: '700',
    },
    {
      path: '../public/fonts/averta/Averta-Black.ttf',
      weight: '800',
    },
  ],
  variable: '--font-averta',
});

export const metadata = {
  title: 'Instantly.ai',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${averta.className} tracking-wide`}>
        <main className='flex h-screen'>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
