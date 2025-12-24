import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [active, setActive] = useState("hero");
  const linkClass = (id) =>
    `cursor-pointer transition ${active === id ? "bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700  pr-2 pl-2 pb-1 pt-1 rounded-md"
      : "text-gray-400 hover:text-white hover:bg-white/10 pr-2 pl-2 pb-1 pt-1 rounded-md"
    }`;


  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-md shadow"
          : "bg-black/40"
          }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
          {/* Logo */}
          <a
            href="#hero" className="">
            <h1 className="
            bg-[length:200%_100%]
            animate-textShine
            text-2xl font-bold relative  overflow-hidden  inline-block
            bg-gradient-to-r from-purple-600 to-indigo-500/90 bg-clip-text text-transparent">
              CoderSulyman
            </h1>
            {/* Light moving line */}

          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a
              onClick={() => setActive("hero")}
              className={linkClass("hero")}
              href="#hero">Home</a>
            <a
              onClick={() => setActive("about")}
              className={linkClass("about")}
              href="#about">About</a>
            <a
              onClick={() => setActive("services")}
              className={linkClass("services")}
              href="#services">Services</a>
            <a
              onClick={() => setActive("skills")}
              className={linkClass("skills")}
              href="#skills">Skills</a>

            <a
              onClick={() => setActive("projects")}
              className={linkClass("projects")}
              href="#projects">Projects</a>
            <a
              onClick={() => setActive("contact")}
              className={linkClass("contact")}
              href="#contact">Contact</a>
          </div>


          {/* Mobile Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>


        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full text-white bg-black/30 transition-all duration-300 ease-in-out ${open ? "max-h-80 opacity-100" : "max-h-0 overflow-hidden"
            }`}
        >
          <div className={`flex flex-col items-start px-6 py-4 space-y-4 backdrop-blur-md font-medium`}>
            <a
              onClick={() => { setActive("hero"); setOpen(false) }}
              className={linkClass("hero")}
              href="#hero">Home</a>
            <a
              onClick={() => { setActive("about"); setOpen(false) }}
              className={linkClass("about")}
              href="#about">About</a>
              <a
              onClick={() => setActive("services")}
              className={linkClass("services")}
              href="#services">Services</a>
            <a
              onClick={() => { setActive("skills"); setOpen(false) }}
              className={linkClass("skills")}
              href="#skills">Skills</a>
            <a
              onClick={() => { setActive("projects"); setOpen(false) }}
              className={linkClass("projects")}
              href="#projects">Projects</a>
            <a
              onClick={() => { setActive("contact"); setOpen(false) }}
              className={linkClass("contact")}
              href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar