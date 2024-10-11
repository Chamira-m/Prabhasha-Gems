"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/home/logo.png";
import Cart from "../../../public/images/home/cart.png";
import Profile from "../../../public/images/home/profile.png";
import Search from "../../../public/images/home/search.png";
import { Navbar } from "./navbar";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If we scroll down, hide the navbar
        setIsVisible(false);
      } else {
        // If we scroll up, show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="grid grid-cols-3 gap-3 items-center py-1 px-6">
          {/* Mobile Menu */}
          <div>
            <div className="block xl:hidden">
              <Navbar />
            </div>
          </div>

          <div className="flex justify-center ">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={500}
                height={300}
                className="xl:block hidden xl:w-[182px] xl:h-[107px] 2xl:w-[228px] 2xl:h-[134px]"
              />
            </Link>
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={125}
                height={75}
                className="block xl:hidden"
              />
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="relative flex flex-col h-full">
            <div className="absolute right-0 flex gap-3 p-2">
              <Image
                className="cursor-pointer xl:block hidden xl:w-[19px] xl:h-[19px] 2xl:w-[24px] 2xl:h-[24px] 3xl:w-[24px] 3xl:h-[24px]"
                src={Search}
                alt="Search"
                width={500}
                height={300}
              />
              <Image
                className="cursor-pointer xl:block hidden xl:w-[19px] xl:h-[19px] 2xl:w-[24px] 2xl:h-[24px]"
                src={Cart}
                alt="Cart"
                width={500}
                height={300}
              />
              <Image
                className="cursor-pointer xl:block hidden xl:w-[19px] xl:h-[19px] 2xl:w-[24px] 2xl:h-[24px]"
                src={Profile}
                alt="Profile"
                width={500}
                height={300}
              />
              <Image
                className="cursor-pointer block xl:hidden"
                src={Search}
                alt="Search"
                width={13}
                height={13}
              />
              <Image
                className="cursor-pointer block xl:hidden"
                src={Cart}
                alt="Cart"
                width={13}
                height={13}
              />
              <Image
                className="cursor-pointer block xl:hidden"
                src={Profile}
                alt="Profile"
                width={13}
                height={13}
              />
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="xl:block hidden">
          <div className="flex justify-center">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
