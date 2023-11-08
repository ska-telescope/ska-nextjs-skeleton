import type { Metadata } from 'next';
import StoreClient from '../components/storeClient/storeClient';

export const metadata: Metadata = {
  title: 'NextJS Skeleton',
  description: 'TREVOR CREATED THIS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreClient>{children}</StoreClient>
      </body>
    </html>
  );
}
