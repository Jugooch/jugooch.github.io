import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { SpaceBackground } from '@/components/space-background';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Justice Gooch | Software Developer & UI/UX Designer',
  description: 'Portfolio of Justice Gooch - Software Developer and UI/UX Designer specializing in creating beautiful, accessible web experiences.',
  icons: {
      icon: [
          {
              url: '/favico.svg',
              type: 'image/svg+xml',
          },
          {
              url: '/favico.jpg',
              type: 'image/jpeg',
          }
      ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <SpaceBackground />
            <main className="relative z-10">{children}</main>
          </ThemeProvider>
      </body>
    </html>
  );
}