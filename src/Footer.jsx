import React from "react";
// import { Card, div } from "@/components/ui/card"; // Adjust the import path to match your project
// import { Button } from "@/components/ui/button";
// import Logo from '../assets/logo.jpg'
export default function Footer() {
  return (
    <div className="rounded-none border-t-2 ">
      <div className="flex flex-col items-center justify-between md:flex-row p-6">
        {/* Footer Logo */}
        <div className="mb-4 md:mb-0">
        {/* <img src={Logo} alt="" className="size-56"/> */}
          <h1 className="text-xl font-bold ">Steady Partner</h1>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap gap-4 ">
            <li>
              <a href="#home" className="hover:text-green-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-4 py-4 text-center text-sm ">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  );
}
