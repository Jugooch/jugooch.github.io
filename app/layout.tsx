import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { profile } from '@/lib/site';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const description =
  'Justice Gooch is a full-stack software engineer who builds and ships products end to end — Next.js, Vue, Java, and C# — with a strong product-design background.';

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description,
  openGraph: {
    type: 'website',
    url: profile.siteUrl,
    siteName: profile.name,
    title: `${profile.name} | ${profile.role}`,
    description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Justice Gooch, Full-Stack Software Engineer' }],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/favico.svg', type: 'image/svg+xml' },
      { url: '/favico.jpg', type: 'image/jpeg' },
    ],
  },
  verification: {
    google: '4kIM1Z8y3MaDEpvM4yhRcxkpteS_VZUy-RWWO659LUk',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
