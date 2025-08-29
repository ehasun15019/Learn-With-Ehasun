"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`navbar shadow-lg w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 backdrop-blur-md z-50"
            : "relative bg-transparent"
        }`}
      >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image src={assets.logo} alt="logo" className="w-10" />
            <p className="text-[0.8rem] ps-3 text-gray-400">
              Learn
              <br />
              <span>with Ehasun</span>
            </p>
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
