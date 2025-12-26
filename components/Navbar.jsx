"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set initial hash on reload
  useEffect(() => {
    setActiveHash(window.location.hash);
  }, []);

  // Active link class logic
  const linkClass = (path) => {
  const isHash = path.startsWith("#");
  const isHome = path === "/";

  const isActive =
    (isHome && pathname === "/" && !activeHash) ||
    (isHash && activeHash === path) ||
    (!isHash && !isHome && pathname === path);

  return `cursor-pointer transition px-2 py-1 rounded-md ${
    isActive
      ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white"
      : "text-gray-400 hover:text-white hover:bg-white/10"
  }`;
};


  return (
    <nav
      className={`sticky top-0 z-50 shadow-sm transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow" : "bg-black/40"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setActiveHash("")}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent"
        >
          CoderSulyman
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" onClick={() => setActiveHash("")} className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" onClick={() => setActiveHash("")} className={linkClass("/about")}>
            About
          </Link>
          <Link href="/#services" onClick={() => setActiveHash("#services")} className={linkClass("#services")}>
            Services
          </Link>
          <Link href="/#skills" onClick={() => setActiveHash("#skills")} className={linkClass("#skills")}>
            Skills
          </Link>
          <Link href="/#projects" onClick={() => setActiveHash("#projects")} className={linkClass("#projects")}>
            Projects
          </Link>
          <Link href="/#contact" onClick={() => setActiveHash("#contact")} className={linkClass("#contact")}>
            Contact
          </Link>
        </div>

        {/* Mobile Icon */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/30 transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 backdrop-blur-md font-medium text-white">
          <Link href="/" onClick={() => { setActiveHash(""); setOpen(false); }} className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" onClick={() => { setActiveHash(""); setOpen(false); }} className={linkClass("/about")}>
            About
          </Link>
          <Link href="/#services" onClick={() => { setActiveHash("#services"); setOpen(false); }} className={linkClass("#services")}>
            Services
          </Link>
          <Link href="/#skills" onClick={() => { setActiveHash("#skills"); setOpen(false); }} className={linkClass("#skills")}>
            Skills
          </Link>
          <Link href="/#projects" onClick={() => { setActiveHash("#projects"); setOpen(false); }} className={linkClass("#projects")}>
            Projects
          </Link>
          <Link href="/#contact" onClick={() => { setActiveHash("#contact"); setOpen(false); }} className={linkClass("#contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
