import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import "@/styles/tailwind.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description:
    "Discover our wide range of products including clothing and accessories for men, women, and kids.",
  keywords: "clothing, accessories, fashion, online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
