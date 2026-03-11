"use client";
import { useState, useEffect } from "react";

export default function ScrollTopButton() {
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
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="cursor-pointer fixed text-2xl bottom-15 right-8 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-all"
        >
          ↑
        </button>
      )}
    </>
  );
}
