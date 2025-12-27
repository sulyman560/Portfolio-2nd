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
          <main className="pt-[64px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
