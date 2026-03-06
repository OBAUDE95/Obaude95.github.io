import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'OBAUDE.AI | Radical Experiences',
  description: 'Obaude Ayodeji Michael - Machine Learning Engineer & GenAI Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <div className="ambient-glow">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
