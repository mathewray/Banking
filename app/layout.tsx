import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google"; // Importing fonts from Google Fonts
import "./globals.css";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }); // Inter font for general text
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],  // subsets for the IBM Plex Serif font
  weight:['400', '700'],
  variable: "--font-ibm-plex-serif"
  
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
