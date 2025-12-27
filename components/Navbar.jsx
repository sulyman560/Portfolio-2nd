"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[64px] bg-black z-50 flex items-center justify-between px-4">
        <h1 className="text-white font-bold">LOGO</h1>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        <div className="hidden md:flex gap-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[64px] left-0 w-full bg-black text-white z-40
        transition-all duration-300
        ${open ? "h-[calc(100vh-64px)]" : "h-0 overflow-hidden"}`}
      >
        <div className="flex flex-col gap-6 p-6">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        </div>
      </div>
    </>
  );
}
