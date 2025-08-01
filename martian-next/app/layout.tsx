import type { Metadata } from "next";
import '@/global.scss';

export const metadata: Metadata = {
  title: "Martian Engineering - Hard Problems, Modern Solutions",
  description: "We are a team of senior engineers who solve complex technical problems across diverse domains.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="theme-dark">
        {children}
      </body>
    </html>
  );
}