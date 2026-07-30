import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Hamdan | AI Engineer & Full Stack Developer',
  description: 'Premium portfolio for Muhammad Hamdan, an AI Undergraduate at FAST NUCES Karachi building AI products and full stack experiences.',
  keywords: ['Muhammad Hamdan', 'AI Engineer', 'Full Stack Developer', 'FAST NUCES', 'Portfolio'],
  openGraph: {
    title: 'Muhammad Hamdan | AI Engineer & Full Stack Developer',
    description: 'Premium portfolio showcasing AI products, software engineering, and innovation.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
