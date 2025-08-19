import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import CursorMagnetico from "@/components/CursorMagnetico";

export const metadata: Metadata = {
  title: 'NexusAI - Cybernetic Agents for the Digital Frontier',
  description: 'NexusAI deploys autonomous agents that automate your workflows for the digital frontier.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <CursorMagnetico />
        <div className="scanline"></div>
        <div className="relative z-10">
            {children}
            <Toaster />
        </div>
      </body>
    </html>
  );
}
