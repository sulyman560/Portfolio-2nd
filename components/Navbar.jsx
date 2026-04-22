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

  // bg change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const isActive = (href) => {
  if (href === "/" && pathname === "/" && hash === "") return true;
  if (href.startsWith("/#") && hash === href.replace("/", "")) return true;
  if (!href.includes("#") && pathname === href) return true;
  return false;
};
useEffect(() => {
  const onHashChange = () => {
    setHash(window.location.hash);
  };

  onHashChange();
  window.addEventListener("hashchange", onHashChange);
  return () => window.removeEventListener("hashchange", onHashChange);
}, []);


  const linkClass = (href) =>
    `px-4 py-2 rounded-md transition ${isActive(href)
      ? "bg-gradient-to-r from-purple-600 to-indigo-500/90 text-white"
      : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/#services", label: "Services" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition ${scrolled ? "backdrop-blur-md" : "bg-black/10"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="
          bg-[length:200%_100%] animate-textShine
          text-2xl font-bold relative  overflow-hidden  inline-block
          bg-gradient-to-r from-purple-600 to-indigo-500/90 bg-clip-text text-transparent"
          onClick={() => setOpen(false)}
        >
          CoderSulyman
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full left-0 right-0 top-full bg-black/90 z-40 transition-all duration-300 ${open
            ? "opacity-100 visible backdrop-blur-md"
            : "opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
               className={linkClass(l.href)}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}
