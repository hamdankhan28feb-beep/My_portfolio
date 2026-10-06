import type { Metadata } from 'next';
import { Press_Start_2P, VT323 } from 'next/font/google';
import './globals.css';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap'
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const themeScript = `!function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');var e=localStorage.getItem('theme');if(e==='dark'){d.style.colorScheme='dark';c.add('dark')}else{d.style.colorScheme='light';c.add('light')}}catch(e){}}()`;

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
      <body className={`${pressStart.variable} ${vt323.variable} font-body`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
