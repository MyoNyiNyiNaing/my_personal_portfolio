import React from "react";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  Aos.init();
  return (
    <footer className=" bg-black  text-white dark:bg-white dark:text-black pt-16 md:pt-32 pb-5">
      <div className=" max-w-[1215px] px-5 lg:mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className=" mb-10 md:mb-20 text-[30px] md:text-title_sm lg:text-title font-[700]"
        >
          <h1 className=" mb-2">Ready to make something kickass?</h1>
          <a
            href="#"
            className=" relative footer-cta text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500"
          >
            Let's get on a call.
          </a>
        </div>
        {/* footer link */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-once="true"
          className=" mb-20  md:mb-40 grid lg:grid-cols-2 gap-20"
        >
          <div className=" text-sm text-gray-500 space-y-3">
            <a href="#">
              <h1 className=" text-white dark:text-black text-[25px] font-[700]">
                My Portfolio<span className=" text-red-400">.</span>
              </h1>
            </a>
            <p>848 Yadanarbon Road, South Dagon, Yangon</p>
            <a href="#" className=" flex items-center gap-2 ">
              <img
                src="https://assets.website-files.com/5fef5619b640934b33c2385e/60792c7df85964dafaa3825d_Vector.svg"
                alt=""
              />
              <div className=" font-[700]">mgmyonyinyi308@gmail.com</div>
            </a>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 text-btn">
          <a href="#" className=" relative w-fit footer-link">
              Home
            </a>
            <a href="#about" className=" relative w-fit footer-link">
              About
            </a>
            <a href="#services" className=" relative w-fit footer-link">
              Services
            </a>
            <a href="#projects" className=" relative w-fit footer-link">
              Projects
            </a>
            <a href="#experience" className=" relative w-fit footer-link">
              Experience
            </a>
            <a href="#contact" className=" relative w-fit footer-link">
              Contact
            </a>
            
            
            <a
              href="https://facebook.com"
              target="_blank"
              className=" relative w-fit footer-link"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className=" relative w-fit footer-link"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className=" relative w-fit footer-link"
            >
              Github
            </a>
          </div>
        </div>

        {/* copy right */}
        <div>
          <div className=" text-sm text-[#8A93A2]">
            © 2023 copyright all right reserved by MyoNyi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
