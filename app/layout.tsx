import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Disfrazate — Probate cualquier disfraz con IA',
  description:
    'App para Halloween que "scrapea" tiendas de mentira, te lleva a una búsqueda real de MercadoLibre y te disfraza con IA en situaciones absurdas. Portfolio preview.',
  openGraph: {
    title: 'Disfrazate',
    description: 'Probate cualquier disfraz con IA.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-foreground antialiased">{children}</body>
    </html>
  );
}
