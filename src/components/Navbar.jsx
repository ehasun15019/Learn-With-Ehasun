"use client";
import { assets } from "@/assets/assets";
import { Flag, Text, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // when Navbar scroll then backdrop blur
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
        className={`navbar shadow-lg w-full transition-all duration-300 px-6 relative ${
          isScrolled
            ? "fixed top-0 left-0 backdrop-blur-md z-50"
            : "relative bg-transparent"
        }`}
      >
        <div className="navbar-start">
          <a className="text-xl flex" href="/">
            <Image src={assets.logo} alt="logo" className="w-10" />
            <p className="text-[0.8rem] ps-3 text-gray-400">
              Learn
              <br />
              <span>with Ehasun</span>
            </p>
          </a>
        </div>

        <div className="navbar-end">
          {/* pc menu_list */}
          <div className="pc-version-navbar-list hidden md:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/Articles">Articles</Link>
              </li>
            </ul>
          </div>

          {/* mobile menu dropdown section */}
          <div className="dropdown block md:hidden lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-soft btn-accent rounded-full p-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 right-[26px] shadow-lg"
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/Articles">Articles</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
