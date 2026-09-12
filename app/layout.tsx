import './styles/globals.scss';
import './styles/page.scss';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Xin Yee Lai | Computer Science & AI/ML',
  description: 'Portfolio of Xin Yee Lai, a final-year Computer Science student at NTU focused on AI/ML, data science, software engineering, and AI research.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
