import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lunara Glow Beauty Salon · Astoria",
  description:
    "Waxing, brows, lashes, and facials at 38-02 Broadway, Astoria. Clear prices. By appointment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={franklin.className}>{children}</body>
    </html>
  );
}
