import React from "react";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  Aos.init();
  return (
    <footer className=" bg-black  text-white dark:bg-white dark:text-black py-10">
      <div className=" max-w-[1215px] px-5 lg:mx-auto">
        <div>
          <div className=" text-sm text-white dark:text-black">
            © 2023 copyright all right reserved by MyoNyi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
