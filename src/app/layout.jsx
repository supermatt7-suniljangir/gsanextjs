/* eslint-disable react/prop-types */
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/others/Footer";
import BottomButtons from "@/components/layout/others/BottomButtons";

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  // Optional: specify weights you need
  weight: ["400", "500", "600", "700", "800", "900"],
  // Optional: if you want to use it as a variable
  variable: "--font-inter",
});

export const metadata = {
  title: "Global Stone Art",
  description: "Natural Stone Suppliers in Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative`}>
        <Navbar />
        {children}
          <BottomButtons className="bg-background p-4 h-20 z-50 w-full sticky bottom-0 left-0 items-center" />
        <Footer />
      </body>
    </html>
  );
}
