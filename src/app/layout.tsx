import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Removed Geist fonts
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Sentra", // Updated title
  description: "Sentra: AI-centred B2B travel platform", // Added a more descriptive text
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased" // Removed Geist font variables
      >
        {children}
      </body>
    </html>
  );
}
