import type { Metadata } from 'next';
import '@/styles/globals.css';
// import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'SKAO Next.JS skeleton project',
  description: 'This is a skeleton project for SKAO Next.JS',
};

// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
