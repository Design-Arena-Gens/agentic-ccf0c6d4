import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Digital Marketing Agency Launch Plan",
  description:
    "Comprehensive launch plan for starting an AI-powered digital marketing agency, covering research, positioning, service lines, operations, and growth."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
