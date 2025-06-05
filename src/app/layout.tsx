import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentra",
  description: "Sentra: AI-centred B2B travel platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
