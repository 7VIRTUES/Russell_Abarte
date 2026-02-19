import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Russell Abarte | Personal Website",
  description:
    "Personal portfolio of Russell Abarte featuring bio, education, certificates, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
