import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Header({ toggle }) {
  return (
    <div
      className="flex justify-between p-4 items-center max-w-[1100px] lg:mx-auto 
    "
    >
      <div>
        <img src="/images/logo.svg" alt="logo" className="w-[100%] h-[2rem]" />
      </div>
      <button onClick={toggle} className="lg:hidden">
        <RxHamburgerMenu size={36} />
      </button>
      <nav className="hidden   bg-white  lg:flex   gap-4 text-[1.4rem] ">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline ">
          New
        </a>
        <a href="#" className="hover:underline ">
          Popular
        </a>
        <a href="#" className="hover:underline ">
          Trending
        </a>
        <a href="#" className="hover:underline ">
          Categories
        </a>
      </nav>
    </div>
  );
}
