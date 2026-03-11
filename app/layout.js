import React, { useEffect, useState } from 'react'
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portolio - Sulyman Ahammed",
  description: "",
};

export default function RootLayout({ children }) {
  const [show, setShow] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 500) {
          setShow(true);
        } else {
          setShow(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
      </head>
      <body suppressHydrationWarning={true}
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-clip dark:bg-darkTheme dark:text-white
        bg-gray-950 min-h-screen w-full dark:bg-darkTheme transition-colors duration-500
        `}>
        <ThemeProvider>
          
          <Navbar />
          
          <main className="">
            {children}
            {show && (
        <button
          onClick={scrollTop}
          className="cursor-pointer fixed text-2xl bottom-15 right-8 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-all"
        >
          ↑
        </button>
      )}
          </main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
