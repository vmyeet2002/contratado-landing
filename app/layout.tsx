import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CONTRATADO',
  description: 'De candidato invisible a contratable en 45 días',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <head>
        {/* Display font: Instrument Serif - distinctive, editorial, refined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {/* Body font: Plus Jakarta Sans - clean, professional, readable */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Mono font: IBM Plex Mono - technical elements */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0e0e0e" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body style={{ backgroundColor: '#0e0e0e', color: '#ffffff' }}>
        {children}
      </body>
    </html>
  );
}
