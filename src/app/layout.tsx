import './global.css';
import { StyledComponentsRegistry } from './registry';

export const metadata = {
  metadataBase: new URL('https://portfolio.gods.work'),
  title: 'John Gulbronson | Technical Consulting for Communities',
  description: 'Technical consulting for startups, nonprofits, and organizations. Custom software development, product strategy, fractional CTO services, AI integration, and community tech solutions.',
  openGraph: {
    title: 'John Gulbronson | Technical Consulting for Communities',
    description: 'Technical consulting for startups, nonprofits, and organizations. Custom software development, product strategy, fractional CTO services, AI integration, and community tech solutions.',
    images: [
      {
        url: '/WiredInSamurai.jpeg',
        width: 1200,
        height: 630,
        alt: 'John Gulbronson - Technical Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Gulbronson | Technical Consulting for Communities',
    description: 'Technical consulting for startups, nonprofits, and organizations. Custom software development, product strategy, fractional CTO services, AI integration, and community tech solutions.',
    images: ['/WiredInSamurai.jpeg'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
