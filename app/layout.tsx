import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PocketRights - Know Your Rights, Instantly',
  description: 'A mobile-first guide and tool for users to understand and assert their legal rights during interactions with law enforcement.',
  openGraph: {
    title: 'PocketRights - Know Your Rights, Instantly',
    description: 'A mobile-first guide and tool for users to understand and assert their legal rights during interactions with law enforcement.',
    type: 'website',
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://pocketrights.vercel.app/og-image.png',
    'fc:frame:button:1': 'Get Started',
    'fc:frame:button:1:action': 'post',
    'fc:frame:button:1:target': 'https://pocketrights.vercel.app/api/frame',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
