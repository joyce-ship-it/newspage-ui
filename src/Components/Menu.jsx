import React from "react";
import { IoCloseOutline } from "react-icons/io5";
export default function Menu({ toggle }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      toggle();
    }
  }
  return (
    <div
      className="inset-0 fixed backdrop-brightness-50 "
      onClick={handleOverlayClick}
    >
      <nav className="w-[300px] h-full bg-white ml-auto flex flex-col justify-center gap-4 text-[1.4rem] px-4">
        <a href="#" className="hover:underline hover:font-bold">
          Home
        </a>
        <a href="#" className="hover:underline hover:font-bold">
          New
        </a>
        <a href="#" className="hover:underline hover:font-bold">
          Popular
        </a>
        <a href="#" className="hover:underline hover:font-bold">
          Trending
        </a>
        <a href="#" className="hover:underline hover:font-bold">
          Categories
        </a>
      </nav>
      <button className="cursor-pointer  " onClick={toggle}>
        <IoCloseOutline
          size={68}
          className="absolute top-4 right-4 hover:outline-2 hover:outline-red-300 rounded-[50%]"
        />
      </button>
    </div>
  );
}
