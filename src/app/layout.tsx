import type { Metadata } from "next";
import { Epilogue, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenScape — Award-Winning Landscape Company",
  description:
    "Award-winning landscaping and garden design. We create outdoor living spaces designed to help you make the most of your life at home.",
  openGraph: {
    title: "GreenScape — Where Nature Meets Design",
    description: "Premium landscaping, garden design, and outdoor living spaces. Transforming UK gardens since 2012.",
    type: "website",
  },
  keywords: ["landscaping", "garden design", "outdoor living", "landscape company", "UK landscaper", "premium gardens"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} ${playfair.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
