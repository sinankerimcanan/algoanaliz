import { Outfit, JetBrains_Mono, Crimson_Pro } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '600', '700'],
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Algoritma Analizi - Sinav Hazirlik',
  description: 'Algoritma analizi sinav hazirlik rehberi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} ${jetbrainsMono.variable} ${crimsonPro.variable}`}>
        {children}
      </body>
    </html>
  );
}
