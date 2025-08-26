"use client";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { IoReorderFourOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="shadow-lg shadow-blue-500/20">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-3">
          <div className="px-3 py-2">
            <Image src={logo} alt="" width="120" height="120" />
          </div>
          <div
            className={`duration-500 hidden bg-white md:min-h-fit min-h-[60vh] right-0 top-[-100%] md:w-auto  w-full md:flex items-center px-5 ${
              isMenuOpen ? "top-[9%]" : "top-[-100%]"
            }`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li className="hover:text-gray-700  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li className="hover:text-gray-700  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <Link href="/shop">فروشگاه</Link>
              </li>
              <li className="hover:text-gray-700  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <Link href="/blog">وبلاگ</Link>
              </li>
              <li className="hover:text-gray-700  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <Link href="/contact">تماس با ما</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="px-4 py-3 text-white  rounded-full cursor-pointer bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-400">
              <Link href="/signin">عضویت</Link>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <IoCloseOutline className="text-3xl cursor-pointer md:hidden" />
              ) : (
                <IoReorderFourOutline className="text-3xl cursor-pointer md:hidden" />
              )}
            </button>
          </div>
        </nav>
      </div>
      {isMenuOpen ? (
        <div
          className={` bg-white absolute md:min-h-fit min-h-[60vh] right-0 md:w-auto  w-full items-center px-5 md:hidden`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li className="hover:text-gray-700  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="hover:text-gray-700  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <Link href="/shop">فروشگاه</Link>
            </li>
            <li className="hover:text-gray-700  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <Link href="/blog">وبلاگ</Link>
            </li>
            <li className="hover:text-gray-700  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <Link href="/contact">تماس با ما</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
