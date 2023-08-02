import React from "react";

const Button = ({ text }) => {
  return (
    <div className=" relative w-fit">
      <button className="z-10 bg-black dark:bg-white dark:text-black text-white px-8 py-3 text-[18px] relative -translate-x-2 -translate-y-2 transition-transform duration-500 hover:translate-x-0 hover:translate-y-0">
        {text}
      </button>
      <span className=" after:block after:absolute after:-inset-0 after:bg-gradient-to-r after:from-purple-600 after:via-red-500 after:to-yellow-500"></span>
    </div>
  );
};

export default Button;
