import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatgjipito - Asistent AI Shqiptar",
  description: "Një asistent AI që flet shqip dhe ndihmon me pyetjet tuaja. Bazuar në Google Generative AI.",
  keywords: ["AI", "asistent", "shqiptar", "albania", "chatbot", "google", "generative"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 