"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openSub2menu, setOpenSub2menu] = useState<string | null>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmenuToggle = (menuTitle: string, path: string) => {
    if (menuData.find((menu) => menu.title === menuTitle)?.submenu) {
      setOpenSubmenu(openSubmenu === menuTitle ? null : menuTitle);
      setOpenSub2menu(null);
    } else {
      router.push(path);
      closeMenu();
    }
  };

  const handleSub2menuToggle = (submenuTitle: string) => {
    setOpenSub2menu(openSub2menu === submenuTitle ? null : submenuTitle);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
    setOpenSub2menu(null);
  };

  const menuData = [
    {
      title: "SAPPHIRES",
      path: "/",
      submenu: [
        {
          title: "LOOSE STONES",
          path: "/",
          sub2menu: [
            { title: "BLUE SAPPHIRE", path: "/about" },
            { title: "RUBY", path: "/pairs" },
            { title: "EMERALDS", path: "/layouts" },
            { title: "PINK SAPPHIRES", path: "/calibrated-sapphires" },
            { title: "YELLOW SAPPHIRES", path: "/request-gems" },
            { title: "SPINEL", path: "/request-gems" },
          ],
        },
        { title: "PAIRS", path: "/pairs" },
        { title: "LAYOUTS", path: "/layouts" },
        { title: "CALIBRATED SAPPHIRES", path: "/calibrated-sapphires" },
        { title: "REQUEST GEMS", path: "/request-gems" },
      ],
    },
    { title: "JEWELLERY", path: "/jewellery" },
    { title: "FINE JEWELLERY", path: "/fine-jewellery" },
    { title: "COLLECTION", path: "/collection" },
    {
      title: "GIFT",
      path: "/",
      submenu: [
        {
          title: "LOOSE STONES",
          path: "/",
          sub2menu: [
            { title: "BLUE SAPPHIRE", path: "/loose-stones" },
            { title: "RUBY", path: "/pairs" },
            { title: "EMERALDS", path: "/layouts" },
            { title: "PINK SAPPHIRES", path: "/calibrated-sapphires" },
            { title: "YELLOW SAPPHIRES", path: "/request-gems" },
            { title: "SPINEL", path: "/request-gems" },
          ],
        },
        { title: "PAIRS", path: "/pairs" },
        { title: "LAYOUTS", path: "/layouts" },
        { title: "CALIBRATED SAPPHIRES", path: "/calibrated-sapphires" },
        { title: "REQUEST GEMS", path: "/request-gems" },
      ],
    },
    { title: "ABOUT US", path: "/about" },
    { title: "CONTACT US", path: "/contact" },
  ];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const slider = document.getElementById("out_slider");
      const innerSlider = document.getElementById("inner_slider");
      if (slider && !innerSlider?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Mobile Menu Button */}
        <button
          className="block xl:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-20">
          {menuData.map((menu) => (
            <div key={menu.title} className="relative group">
              <Link
                href={menu.path}
                className="hover:text-gray-700 text-darkMint font-mulish-extraBold text-[18px]"
              >
                {menu.title}
              </Link>
              {menu.submenu && (
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-4 w-80">
                  {menu.submenu.map((submenu) => (
                    <div key={submenu.title} className="group relative">
                      <Link
                        href={submenu.path}
                        className="block hover:text-gray-700 text-darkBlue font-mulish-medium"
                      >
                        {submenu.title}
                      </Link>
                      {submenu.sub2menu && (
                        <div className="hidden group-hover:block bg-white shadow-lg p-4 mt-2">
                          {submenu.sub2menu.map((sub2menu) => (
                            <Link
                              key={sub2menu.title}
                              href={sub2menu.path}
                              className="block hover:text-gray-700 ml-4 text-blueGray font-mulish-medium"
                            >
                              {sub2menu.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 transition-opacity duration-300 opacity-100"
            id="out_slider"
          >
            <div
              className="w-60 top-0 left-0 h-screen fixed bg-white p-8 overflow-y-auto"
              id="inner_slider"
            >
              <div className="flex flex-col text-sm">
                {menuData.map((menu) => (
                  <div key={menu.title} className="mb-4">
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() => handleSubmenuToggle(menu.title, menu.path)}
                    >
                      <span className="text-darkMint font-mulish-extraBold">
                        {menu.title}
                      </span>
                      {menu.submenu && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openSubmenu === menu.title ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      )}
                    </button>
                    {menu.submenu && openSubmenu === menu.title && (
                      <div className="ml-4 mt-2">
                        {menu.submenu.map((submenu) => (
                          <div key={submenu.title} className="mb-2 ">
                            <button
                              className="flex items-center justify-between w-full text-left"
                              onClick={() =>
                                handleSub2menuToggle(submenu.title)
                              }
                            >
                              <span className="text-darkBlue font-mulish-medium">
                                {submenu.title}
                              </span>
                              {submenu.sub2menu && (
                                <svg
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    openSub2menu === submenu.title
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  ></path>
                                </svg>
                              )}
                            </button>
                            {submenu.sub2menu &&
                              openSub2menu === submenu.title && (
                                <div className="ml-4 mt-2">
                                  {submenu.sub2menu.map((sub2menu) => (
                                    <Link
                                      key={sub2menu.title}
                                      href={sub2menu.path}
                                      className="block hover:text-gray-700 mb-2 text-blueGray font-mulish-medium"
                                      onClick={closeMenu}
                                    >
                                      {sub2menu.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
