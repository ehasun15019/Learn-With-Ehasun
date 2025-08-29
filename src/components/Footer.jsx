import { assets } from "@/assets/assets";
import { Facebook, LinkedinIcon, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto mt-5 py-5 border-t border-t-gray-600 grid gap-8 md:grid-cols-3 sm:grid-cols-1 items-center justify-center px-5">
      {/* Footer Part 1 */}
      <div className="footer_part1 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="logo-section mb-3">
          <Image src={assets.logo} alt="logo" className="w-[80px]" />
        </div>

        <p className="mb-3">Let’s connect with socials</p>

        <div className="socials_icons flex gap-3 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/ehasun-ul-islam-orko-857831315"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={20} />
          </a>

          <a
            href="https://www.facebook.com/ehasun.ul.islam.orko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://x.com/ehasun15019"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Footer Part 2 */}
      <div className="footer_part2 flex flex-col items-center md:items-start text-center md:text-left">
        <h4 className="font-semibold mb-3">Get In Touch</h4>

        <div className="touch-section flex flex-col gap-3">
          <div className="phone-section flex gap-2 items-center">
            <Phone size={16} />
            <article>Phone: +880 1601-503181</article>
          </div>

          <div className="email-section flex gap-2 items-center">
            <Mail size={16} />
            <article>Gmail: ehasun0909@gmail.com</article>
          </div>
        </div>
      </div>

      {/* Footer Part 3 */}
      <div className="footer_part3 flex flex-col items-center justify-center text-center">
        <p>Copyright © 2025 LWE...</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
