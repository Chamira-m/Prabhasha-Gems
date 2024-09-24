"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/home/logo.png";
import Cart from "../../../public/images/home/cart.png";
import Profile from "../../../public/images/home/profile.png";
import Search from "../../../public/images/home/search.png";
import { Navbar } from "./navbar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="grid grid-cols-3 gap-3 items-center py-4 px-6">
          {/* Mobile Menu */}
          <div>
            <div className="block xl:hidden">
              <Navbar />
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={228}
                height={134}
                className="xl:block hidden"
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
            <div className="absolute bottom-0 right-0 flex gap-3 p-2">
              <Image
                className="cursor-pointer xl:block hidden"
                src={Search}
                alt="Search"
                width={24}
                height={24}
              />
              <Image
                className="cursor-pointer xl:block hidden"
                src={Cart}
                alt="Cart"
                width={24}
                height={24}
              />
              <Image
                className="cursor-pointer xl:block hidden"
                src={Profile}
                alt="Profile"
                width={24}
                height={24}
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

      {/* Main Content (Account for Header Height) */}
      {/* <div className="pt-24"> */}
      {/* The rest of your page content goes here */}
      {/* </div> */}
    </>
  );
};

export default Header;
