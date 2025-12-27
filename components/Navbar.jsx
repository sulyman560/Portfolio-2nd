"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // hash detect (App Router safe)
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = (href) => {
    if (href === "/" && pathname === "/" && !hash) return true;
    if (href.startsWith("#") && hash === href) return true;
    if (!href.startsWith("#") && pathname === href) return true;
    return false;
  };

  const linkClass = (href) =>
    `px-3 py-1 rounded-md transition ${
      isActive(href)
        ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-white/10"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/40"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            setHash("");
            setOpen(false);
          }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent"
        >
          CoderSulyman
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/#services" className={linkClass("#services")}>Services</Link>
          <Link href="/#skills" className={linkClass("#skills")}>Skills</Link>
          <Link href="/#projects" className={linkClass("#projects")}>Projects</Link>
          <Link href="/#contact" className={linkClass("#contact")}>Contact</Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 backdrop-blur-md`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["#services", "Services"],
            ["#skills", "Skills"],
            ["#projects", "Projects"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href.startsWith("#") ? `/${href}` : href}
              className={linkClass(href)}
              onClick={() => {
                setHash(href.startsWith("#") ? href : "");
                setOpen(false);
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
