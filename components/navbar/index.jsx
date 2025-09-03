"use client";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "@/public/images/Logo.png";
import Link from "next/link";
import {
  IoReorderFourOutline,
  IoCloseOutline,
  IoLogInOutline,
  IoCartOutline,
} from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuContent = [
    { pageName: "صفحه اصلی", href: "/" },
    { pageName: "فروشگاه", href: "/shop" },
    { pageName: "بلاگ", href: "/blog" },
    { pageName: "ارتباط با ما", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar Section */}
      <div className="px-1 bg-blue-50">
        <nav className="container flex justify-between items-center mx-auto py-3 mt-3 px-1 ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden"
          >
            {isMenuOpen ? (
              <IoCloseOutline className="text-3xl cursor-pointer" />
            ) : (
              <IoReorderFourOutline className="text-3xl cursor-pointer" />
            )}
          </button>
          {/* Logo Section */}
          <div className="px-3 py-2">
            <Link href="/">
              <Image src={logo} alt="" width="120" height="120" />
            </Link>
          </div>

          {/* Menu Section */}
          <div
            className={`duration-500 hidden  md:min-h-fit min-h-[60vh] right-0 top-[-100%] md:w-auto  w-full md:flex items-center px-5 ${
              isMenuOpen ? "top-[9%]" : "top-[-100%]"
            }`}
          >
            <ul className="flex md:flex-row flex-col md:items-center">
              {menuContent.map((item) => (
                <li
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 max-w-full mx-2"
                  key={item.pageName}
                >
                  <Link
                    className="py-3 px-2 hover:bg-gray-200 rounded-lg Active:bg-gray-200"
                    href={item.href}
                  >
                    {item.pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Button Section */}
          <div className="flex items-center gap-3">
            <button className="text-xl px-2 py-2 text-white  rounded-full cursor-pointer bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-400">
              <Link href="/cart">
                <IoCartOutline />
              </Link>
            </button>
            <button className="text-xl px-2 py-2 text-white  rounded-full cursor-pointer bg-lime-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-lime-400">
              <Link href="/login">
                <IoLogInOutline />
              </Link>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Section */}
      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            className={`bg-white absolute md:min-h-fit  right-0 md:w-auto  w-full items-center pt-1 px-7 md:hidden `}
          >
            <ul className="flex md:flex-row flex-col md:items-center">
              {menuContent.map((item) => (
                <li
                  className=""
                  key={item.pageName}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    className="p-3 flex active:bg-gray-600 active:text-white rounded-2xl"
                    href={item.href}
                  >
                    {item.pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
