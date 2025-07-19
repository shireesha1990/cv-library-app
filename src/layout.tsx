import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV Library',
  description: 'Find your next job',
};

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