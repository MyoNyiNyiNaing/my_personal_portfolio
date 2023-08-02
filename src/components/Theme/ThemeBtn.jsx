import React from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import "./Btn.css";

const ThemeBtn = ({ darkMode, themeSwitch }) => {
  return (
    <>
      <div className="z-20 hidden lg:block lg:fixed top-[50%] right-0 translate-y-[-50%] transition-all duration-300 intro hover:right-0">
        <button
          onClick={() => themeSwitch()}
          className={`p-2 rounded-bl-md rounded-tl-md  outline outline-offset-0 text-lg transition-all duration-500  ${
            darkMode
              ? "bg-white outline-black text-black"
              : "outline-white bg-black text-white"
          }`}
        >
          {darkMode ? (
            <BsMoonStarsFill className="hover:animate-pulse" />
          ) : (
            <BsSunFill className=" hover:animate-[spin_2s_infinite]" />
          )}
        </button>
      </div>
    </>
  );
};

export default ThemeBtn;
